import { Question } from './question';

export const QUESTIONS: Question[] = [
    {
        id: 1,
        content: "3 + 3 * 3 = ?",
        answers: ["18", "0", "12", "2"],
        correct: 3
    },
    {
        id: 2,
        content: "co to jest macierz?",
        answers: ["tablica", "pole", "liczba zmiennoprzecinkowa", "?"],
        correct: 2
    },
    {
        id: 3,
        content: "Podaj liczbe pierwszą",
        answers: ["Pierwsza", "44", "2", "11"],
        correct: 3
    },
    {
        id: 11,
        content: "Wynik 2+2:",
        answers: ["Za trudne", "Nie wiem", "Może 4", "Jednak 5"],
        correct: 2
    },
    {
        id: 12,
        content: "Czego może być pochodna:",
        answers: ["liczby", "całki", "macierzy", "funkcji"],
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
        content: "Co odpowiada za szybką dawkę energii",
        answers: ["błonnik", "białko", "tłuszcz", "cukier"],
        correct: 3
    },
    {
        id: 32,
        content: "Czym mierzymy prawidłową wagę?",
        answers: ["Poziomicą", "Miarka", "Waga", "BMI"],
        correct: 2
    },
    {
        id: 33,
        content: "Najbardziej dietetyczne danie",
        answers: ["Pączek", "Chleb", "Eklerek", "Ryż"],
        correct: 3
    },
    {
        id: 46,
        content: "Czym jest kapitał",
        answers: ["pieniędzmi", "budynkiem", "firmą", "jedzeniem"],
        correct: 3
    },
    {
        id: 47,
        content: "Czym jest ekonomia",
        answers: ["Przedmiotem", "Wiedzą o gospodarce", "Wiedzą o rolnictwie", "Nie wiadomo"],
        correct: 1
    },
    {
        id: 48,
        content: "Po co nam ekonomia",
        answers: ["Nie wiadomo", "By dowiedziec sie jak wszystko dziala w gospodarstwie", "Jest niepotrzebna", "Po coś na pewno"],
        correct: 1
    },
    {
        id: 61,
        content: "W którym roku była bitwa pod Grunwaldem?",
        answers: ["1410", "1939", "1962", "997"],
        correct: 0
    },
    {
        id: 62,
        content: "Zastał Polskę drewnianą zostawił murowaną. Kogo dotyczą słowa?",
        answers: ["Kazimierz III", "Władysław IV", "Zygmunt Stary", "Zygmunt August"],
        correct: 0
    },
    {
        id: 63,
        content: "Jaki zakon rycerski miał własne państwo?",
        answers: ["Templariuszy", "Santiago", "Krzyżacy", "Joannitów"],
        correct: 2
    },
    {
        id: 71,
        content: "C++ jest językiem:",
        answers: ["migowym", 
        "lingwistycznym", 
        "skryptowym",
        "programowania"],
        correct: 4
    },
    {
        id: 72,
        content: "Co pokaże konsola: int i = 4; i++; std::cout << i;",
        answers: ["i", "5", "cout", "nic"],
        correct: 2
    },
    {
        id: 73,
        content: "kompilator konsolowy to:",
        answers: ["c++", "gcc", "g++", "powershel"],
        correct: 2
    },
]