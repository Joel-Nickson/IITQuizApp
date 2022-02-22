export interface QuestionSet {
    question: string,
    type: string,
    time: number,
    answer?: string,
    answers?: string[],
    answer_choices?: string[],
    answer_options?: object[],
    [key: string]: any
}

export const questionsSet = [
    {
        question: "India is {} largest country by population",
        type: "FITB1",
        time: 20,
        answers: [
            "second"
        ]
    },
    {
        question: "India is {} largest country by population and ranks {} in terms of landmass",
        type: "FITB2",
        time: 20,
        answers: [
            "second",
            "seventh"
        ]
    },
    {
        question: "Select top two countries which has highest GDP",
        type: "MAQ",
        time: 20,
        answer_choices: [
            "USA",
            "China",
            "Japan",
            "Germany",
            "UK",
            "India"
        ],
        answers: [
            "USA",
            "China"
        ]
    },
    {
        question: "Which among the following is the most valuable company in the world",
        type: "MCQ",
        time: 20,
        answer_choices: [
            "Tesla",
            "Apple",
            "Microsoft",
            "Netflix",
            "Google"
        ],
        answer: "Tesla"
    },
    {
        question: "Match the following captials with states",
        type: "MTF",
        time: 20,
        answer_options: [
            {
                State: "Maharashtra", Capital: "Mumbai"
            },
            {
                State: "Punjab", Capital: "Chandigarh"
            },
            {
                State: "Karnataka", Capital: "Bengaluru"
            },
            {
                State: "Himachal Pradesh", Capital: "Shimla"
            },
            {
                State: "Rajasthan", Capital: "Jaipur"
            }
        ]
    }
];


export function getFromCharCode(index: number) {
    return String.fromCharCode(97 + index);
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/