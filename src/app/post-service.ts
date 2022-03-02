import { Injectable } from "@angular/core";

@Injectable ()

export class postService {
  posts: Array<any> = [
    {
      date: 'Понедельник, 1 февраля 2022 года',
      positive: [
        {one: 'Покачался', two: 'Попрограммировал'}
    ],
      negative: [
        {one: 'Проспал весь день', two: 'Проиграл в доту'}
      ],
      conclusion: 'Вывод',
    }
  ]
}
