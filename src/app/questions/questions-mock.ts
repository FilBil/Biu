import { Question } from './question';

export const QUESTIONS: Question[] = [
    {
        id: 1,
        content: "3 + 3 * 3 = ?",
        answers: ["18", "0", "12", "2"],
        correct: 2
    },
    {
        id: 2,
        content: "How much is the fish?",
        answers: ["2137", "1488", "5", "1"],
        correct: 3
    },
    {
        id: 3,
        content: "Ile nóg ma kot?",
        answers: ["18", "0", "4", "5"],
        correct: 1
    },
    {
        id: 11,
        content: "Całka z papaja to:",
        answers: ["1", "9", "Szpinak", "Pomidor"],
        correct: 2
    },
    {
        id: 12,
        content: "Różniczka z papaja to:",
        answers: ["1", "9", "Szpinak", "Pomidor"],
        correct: 3
    },
    {
        id: 13,
        content: "Całka z e^x = :",
        answers: ["e^x", "ex", "e/x", "elnx"],
        correct: 0
    },
    {
        id: 31,
        content: "Jakie jest najlepsze nadzienie do pączka?",
        answers: ["Jagoda", "Róża", "Miłość", "Pomidor"],
        correct: 1
    },
    {
        id: 32,
        content: "Kiedy jest tłusty czwartek?",
        answers: ["W środę", "9.08", "24.02", "Pomidor"],
        correct: 2
    },
    {
        id: 33,
        content: "Całka z pączka to = ",
        answers: ["1", "9", "Eklerek", "Pączek bez nadzienia"],
        correct: 2
    },
    {
        id: 46,
        content: "Ile płyt wydał zespół Calvaria",
        answers: ["11", "12", "13", "1"],
        correct: 3
    },
    {
        id: 47,
        content: "Co grała Calvaria",
        answers: ["DSBM", "Death Metal", "Techno", "To samo co Jamiroquai"],
        correct: 1
    },
    {
        id: 48,
        content: "Jaki instrument nie zagrał nigy w Calvarii>",
        answers: ["Bass", "Wokal", "Puzon", "Gitara"],
        correct: 2
    },
    {
        id: 61,
        content: "W którym roku Nergal nagrał Lasy Pomorza?",
        answers: ["1996", "1999", "1987", "2001"],
        correct: 0
    },
    {
        id: 62,
        content: "Brejse brejs star ...",
        answers: ["numa numa jej", "ce ha wu em", "far far far", "Pomidor"],
        correct: 0
    },
    {
        id: 63,
        content: "Ile było muzyków w ich troje",
        answers: ["3 +  3 * 3", "3", "4", "A co to?"],
        correct: 2
    },
    {
        id: 71,
        content: "Gdyby C++ nazywał się C-- to:",
        answers: ["Microsoft by się rozpadł", 
        "Używano by Assemblera zamiast JSa", 
        "Powstałyby komputery kwantowe",
        "Pomidor"],
        correct: 1
    },
    {
        id: 72,
        content: "Co pokaże konsola: int i = 4; i++; std::cout << i;",
        answers: ["i", "5", "Szpinak", "a jakiś main(){}? Może jaka libka?"],
        correct: 3
    },
    {
        id: 73,
        content: "kompilator konsolowy to:",
        answers: ["c++", "gcc", "g++", "powershel"],
        correct: 1
    },
]