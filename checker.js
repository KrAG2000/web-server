const json1 = {
    "itemId": "agni5kartik@gmail.com",
    "itemType": "profile",
    "version": 4,
    "properties": {
        "nbOfVisits": 1,
        "lastVisit": "2023-11-14T07:01:59.738Z",
        "firstVisit": "2023-11-14T07:01:59.738Z",
        "body": {
            "last visited block name": "ZtNQHIXHEpqNSeinAJLO",
            "sessions": 1,
            "last clicked button name": "null",
            "last visited block id": "65530da466dcd3414be75a9f",
            "unique_identifier": "agni5kartik@gmail.com",
            "gender": "",
            "timezone": "",
            "chatfuel user id": "152776444594265",
            "source": "Guest Customer Chat",
            "messenger user id": "152776444594265",
            "locale": "",
            "last seen": "2023-11-14 07:01:59",
            "profile pic url": "",
            "signed up": "2023-11-14 07:01:49",
            "last name": "152776444594265",
            "first name": "Guest User"
        }
    },
    "systemProperties": {
        "lastUpdated": new Date()
    },
    "segments": ["445a5a42"],
    "scores": {},
    "mergedWith": null,
    "consents": {
        "mark3_test": {
            "scope": "apache",
            "typeIdentifier": "string",
            "status": "GRANTED",
            "statusDate": "2023-11-14T07:01:59Z",
            "revokeDate": "2023-11-14T07:01:59Z"
        }
    }
}

const json2 = {
    "itemId": "agni5kartik@gmail.com",
    "itemType": "profile",
    "version": 6,
    "properties": {
        "nbOfVisits": 1,
        "lastVisit": "2023-11-14T07:03:49.176Z",
        "firstVisit": "2023-11-14T07:03:49.176Z",
        "body": {
            "last visited block name": "ZtNQHIXHEpqNSeinAJLO",
            "sessions": 1,
            "last clicked button name": "null",
            "last visited block id": "65530da466dcd3414be75a9f",
            "unique_identifier": "agni5kartik@gmail.com",
            "gender": "",
            "timezone": "",
            "chatfuel user id": "135474322991490",
            "source": "Guest Customer Chat",
            "messenger user id": "135474322991490",
            "locale": "",
            "last seen": "2023-11-14 07:03:48",
            "profile pic url": "",
            "signed up": "2023-11-14 07:03:40",
            "last name": "135474322991490",
            "first name": "Guest User"
        }
    },
    "systemProperties": {
        "lastUpdated": "2023-11-14T07:03:49Z"
    },
    "segments": ["445a5a42"],
    "scores": {},
    "mergedWith": null,
    "consents": {
        "mark3_test": {
            "scope": "apache",
            "typeIdentifier": "string",
            "status": "GRANTED",
            "statusDate": "2023-11-14T07:03:49Z",
            "revokeDate": "2023-11-14T07:03:49Z"
        }
    }
}


console.log((json1 === json2) ? "Jsons are equal" : "Jsons are NOT equal");