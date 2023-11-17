const json1 = {
    "first name": "Guest User",
    "middle name": "",
    "last name": 154831377720922,
    "timezone": "",
    "locale": "",
    "gender": "",
    "messenger user id": 154831377720922,
    "chatfuel user id": 154831377720922,
    "eu restricted": "No",
    "profile pic url": "",
    "signed up": "2023-11-14 09:49:30",
    "last seen": "2023-11-14 09:49:40",
    "sessions": 1,
    "source": "Guest Customer Chat",
    "ref": "6548c258ee34ac77d3b513c2",
    "original source": "Guest Customer Chat",
    "original ref": "6548c258ee34ac77d3b513c2",
    "last visited block id": "65530da466dcd3414be75a9f",
    "last visited block name": "ZtNQHIXHEpqNSeinAJLO",
    "internal user id": "655342aad636e2c4933eb5b7",
    "custom audience ids": "[]",
    "guest": "true",
    "modified date": "2023-11-14T09:49:30.923Z",
    "last action date": "2023-11-14 09:49:30",
    "livechat folder": "done",
    "livechat last modified date": "2023-11-14 09:49:30",
    "custom attributes": 0,
    "refs": "[guest_customer_chat_plugin_6548c258ee34ac77d3b513c2]",
    "available_outside_24h_window": "true",
    "subscribed rss and search subscriptions": "[]",
    "otn purposes": "[]",
    "notification message topics": "[]",
    "last user freeform input": "kartik@kartik.com",
    "email": "kartik@kartik.com",
    // "intent": "testing",
    // "based_on_user_input": "undefined"
}

const json2 = {
    "first name": "Guest User",
    "middle name": "",
    "last name": 175261278999242,
    "timezone": "",
    "locale": "",
    "gender": "",
    "messenger user id": 175261278999242,
    "chatfuel user id": 175261278999242,
    "eu restricted": "No",
    "profile pic url": "",
    "signed up": "2023-11-14 09:51:55",
    "last seen": "2023-11-14 09:52:14",
    "sessions": 1,
    "source": "Guest Customer Chat",
    "ref": "6548c258ee34ac77d3b513c2",
    "original source": "Guest Customer Chat",
    "original ref": "6548c258ee34ac77d3b513c2",
    "last visited block id": "65530da466dcd3414be75a9f",
    "last visited block name": "ZtNQHIXHEpqNSeinAJLO",
    "internal user id": "6553433b619a18f825cbcf66",
    "custom audience ids": "[]",
    "guest": "true",
    "modified date": "2023-11-14T09:51:56.568Z",
    "last action date": "2023-11-14 09:51:56",
    "livechat folder": "done",
    "livechat last modified date": "2023-11-14 09:51:56",
    "custom attributes": 0,
    "refs": "[guest_customer_chat_plugin_6548c258ee34ac77d3b513c2]",
    "available_outside_24h_window": "true",
    "subscribed rss and search subscriptions": "[]",
    "otn purposes": "[]",
    "notification message topics": "[]",
    "last user freeform input": "kartik@kartik.com",
    "email": "kartik@kartik.com",
    "intent": "testing",
    "based_on_user_input": "undefined"
}



console.log((json1 === json2) ? "Jsons are equal" : "Jsons are NOT equal");

const filteredData = Object.fromEntries(Object.entries(json1).filter(([key, value]) => value !== ""));
console.log(filteredData);

const graphql_json = {
    "input": {
        "client_mutation_id": "2719339560064606",
        "actor_id": "181494511705615",
        "message_text": "hello",
        "platform_token": null,
        "page_id": "112715961935203",
        "logging_extra": {
            "requestID": "461d4b90-aaa2-420c-ab05-baade52db2cc",
            "isLoggedIn": "false",
            "isLoggedInUserAction": "false"
        }
    }
}

const incoming_payload = {
    "first name": "Guest User",
    "messenger user id": 154831377720922,
    "chatfuel user id": 154831377720922,
    "eu restricted": "No",
    "signed up": "2023-11-14 09:49:30",
    "last seen": "2023-11-14 09:49:40",
    sessions: 1,
    source: "Guest Customer Chat",
    ref: "6548c258ee34ac77d3b513c2",
    "original source": 'Guest Customer Chat',
    "original ref": '6548c258ee34ac77d3b513c2',
    "last visited block id": '65530da466dcd3414be75a9f',
    "last visited block name": 'ZtNQHIXHEpqNSeinAJLO',
    "internal user id": '655342aad636e2c4933eb5b7',
    guest: 'true',
    "modified date": '2023-11-14T09:49:30.923Z',
    "last action date": '2023-11-14 09:49:30',
    '': 'done',
    'livechat last modified date': '2023-11-14 09:49:30',
    'custom attributes': 0,
    refs: '[guest_customer_chat_plugin_6548c258ee34ac77d3b513c2]',
    available_outside_24h_window: 'true',
    'last user freeform input': 'kartik@kartik.com',
    email: 'kartik@kartik.com',
    intent: 'testing',
    based_on_user_input: 'undefined'
}