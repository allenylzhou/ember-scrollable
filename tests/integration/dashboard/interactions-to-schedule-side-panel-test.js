import Ember from 'ember';
import { test } from 'ember-qunit';
import '../../helpers/define-fixture';
import testHelper from '../../test-helper';

const interaction = {
  id: 1
};

QUnit.module("Interactions To Schedule Side Panel", {
  beforeEach: function() {
    testHelper.beforeEach.apply(this, arguments);

    defineFixture('GET', '/interactions', { params: { primary_contact_id: "1" }, response: {
      "advisors": [
        {
          "id": 1,
          "avatar_url": null,
          "emails": ['advisor@email.com'],
          "name": 'Johnny Advisor',
          "phone_numbers": ['+1 555-123-4567'],
          "job_title": 'Vice President',
          "company_name": 'Apple'
        }
      ],
      "client_contacts": [
        {
          "id": 21387,
          "avatar_url": null,
          "emails": ['client@email.com'],
          "name": 'Bob Client',
          "phone_numbers": ['+1 555-321-9000'],
          "client_account_id": 485
        }
      ],
      "client_accounts": [
        {
           "id": 485,
           "name": 'McKinsey & Company San Francisco'
        }
      ],
      "projects": [
        {
           "id": 32522,
           "status": "high",
           "name": 'Project Name',
           "client_code": "MCKU",
           "details_url": "/projects/32522",
           "index": 3,
           "created_at": "2015-01-23T21:01:33.615+00:00",
           "angle_ids": [40380],
           "analyst_1_id": 6565389
        }
      ],
      "interactions": [
        {
          "id": interaction.id,
          "scheduled_call_time": null,
          "advisor_id": 1,
          "client_contact_id": 21387,
          "project_id": 32522,
          "checklist_item_ids": [],
          "requested_at": '2015-02-18T10:00:00.000+00:00',
          "actioned": false
        }
      ],
      "checklist_items": []
    }});

    defineFixture('GET', '/unavailabilities', { params: { interaction_id: '1' }, response: {
      "unavailabilities": [
        {
          "id": 123,
          "starts_at": moment().utc().startOf('week').add(9, 'hours').toISOString(),
          "ends_at": moment().utc().startOf('week').add(10, 'hours').toISOString(),
          "day": null,
          "interaction_id": interaction.id,
          "type": 'alpha_call',
          "title": 'AlphaCall'
        }
      ]
    }});

    defineFixture('GET', '/interaction_types', { response: {
      "interaction_types": {
        "call": "One-on-one Call",
        "hosted_call": 'Hosted Call',
        "summarised_call": 'Interaction Summary'
      },
      "classifications": {
        "hosted": [
          "hosted_call",
          "summarised_call"
        ],
        "duration_based": [
          "call"
        ]
      }
    }});

    defineFixture('GET', '/dial_ins', { response: {
      "dial_ins":{
        "AU":"Australia",
        "AT":"Austria",
        "BE":"Belgium"
      }
    }});
  },

  afterEach: function() {
    testHelper.afterEach.apply(this, arguments);
  }
});

test("Display other Alpha Calls in calendar", function(assert) {
  visit('/dashboard');
  click('.interactions-to-schedule article:first');

  andThen(function() {
    var nineAmCallSlot = find('.times:first li:nth-child(5) li:first article');

    assert.equal(nineAmCallSlot.text().trim(), 'AlphaCall');
  });
});

test("Schedule interaction makes an API request and displays a notification", function(assert) {
  var callType = 'call';
  var accessCountry = 'AU';
  var advisorPhoneNumber = '5553214567';

  var handler = defineFixture('PUT', `/interactions/${interaction.id}`, { request: {
    "interaction": {
      "actioned": false,
      "advisor_id": "1",
      "client_access_number_country": accessCountry,
      "client_contact_id": "21387",
      "additional_contact_details": null,
      "interaction_type": callType,
      "project_id": "32522",
      "requested_at": "2015-02-18T10:00:00.000Z",
      "scheduled_call_time": moment().utc().startOf('week').add(1, 'day').add(7, 'hours').toISOString(),
      "speak": false,
      "advisor_phone_number": advisorPhoneNumber,
      "advisor_phone_country_code": '1'
    }
  }, response: {
    "interactions": []
  }});

  visit('/dashboard');
  click('.interactions-to-schedule article:first');

  // Select time slot from calendar
  // Monday 7 AM
  click('ul.days > li:nth-child(2) .times li:nth-child(1) article');

  // Set the interaction type
  fillIn('.ember-select[name=interactionType]', callType);

  // Select speak dial in
  fillIn('.ember-select[name=clientAccessNumberCountry]', accessCountry);

  // Fill in advisor phone number
  fillIn('input[name=advisorPhoneNumber]', advisorPhoneNumber);

  // Submit form
  click('.form-submission button');

  andThen(function() {
    assert.equal(handler.called, true);

    var message = $('.messenger .messenger-message-inner').first().text().trim();
    assert.equal(message, "An interaction between Johnny Advisor and Bob Client has been scheduled.");
  });
});

test("Cancel interaction returns to dashboard and removes interaction from the widget", function(assert) {
  defineFixture('DELETE', '/interests/1', { response: {
    "interactions": [
      {
        "id": 1,
        "scheduled_call_time": null,
        "actioned": null,
        "requested_at": null,
        "checklist_item_ids": [],
        "interaction_type": 'One-on-one Call',
        "advisor_time_zone": "PST",
        "advisor_phone_country_code": "+1",
        "advisor_phone_number": "7654321",
        "client_time_zone": "EST",
        "dial_in_number": "1234567",
        "primary_contact_id": 1,
        "speak": true,
        "client_access_number_country": "US",
      }
    ]
  }});

  visit('/dashboard');

  andThen(function() {
    assert.equal(find('.interactions-to-schedule article').length, 1,
    'shows the interaction to schedule in the widget');
  });

  click('.interactions-to-schedule article:first');
  click('.form-submission a');
  click('button.confirm-cancel');

  andThen(function() {
    assert.equal(currentURL(), '/dashboard',
      'returns the user to dashboard after cancelling'
    );

    assert.equal(find('.interactions-to-schedule article').length, 0,
      'removes the interaction from the widget'
    );

    var message = $('.messenger .messenger-message-inner').first().text().trim();
    assert.equal(message, "The interaction has been cancelled.");
  });
});

test("Cancel Interaction Failure", function(assert) {
  defineFixture('DELETE', '/interests/1', { status: 500 });

  visit('/dashboard');

  andThen(function() {
    assert.equal(find('.interactions-to-schedule article').length, 1,
    'shows the original interaction to schedule in the widget');
  });

  click('.interactions-to-schedule article:first');
  click('.form-submission a');
  click('button.confirm-cancel');

  andThen(function() {
    assert.equal(find('.interactions-to-schedule article').length, 1,
      'does not remove the interaction from the widget'
    );

    var message = $('.messenger .messenger-message-inner').first().text().trim();
    assert.equal(message, "The interaction could not be cancelled.",
      'displays a message that it could not be cancelled'
    );
  });
});