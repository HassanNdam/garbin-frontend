import { CategoryLabelType, CategoryLabelEnum, GarnmentAPI } from "@/types";

type SubGarnment = Omit<GarnmentAPI, "brand" | "size" | "createdAt" |"updatedAt" | "subCategoryLabel">;

export const SubTopGarmentsData: SubGarnment[] = [
    {
        uuid: '1',
        name: 'Chemise à carreaux',
        categoryLabel: CategoryLabelEnum.SUB_TOP,
        colors: ['Rouge et blanc'],
        imageUrl:
          'https://www.sunspel.fr/cdn/shop/files/mtsh0001-bkaa-1.jpg?v=1720096400',
      },
      {
        uuid: '2',
        name: 'ma chemise blanche',
        categoryLabel: CategoryLabelEnum.SUB_TOP,
        colors: ['red'],
        imageUrl:
          'https://www.sunspel.fr/cdn/shop/files/mtsh0001-bkaa-1.jpg?v=1720096400',
      },
      {
        uuid: '3',
        name: 't-shirt addidas',
        categoryLabel: CategoryLabelEnum.SUB_TOP,
        colors: ['red'],
        imageUrl:
          'https://www.stihl.fr/content/dam/stihl/media/pim/95746.jpg.transform/StihlImageGallery-mq4/img.jpg',
      },
      {
        uuid: '4',
        name: 't-shirt levis',
        categoryLabel: CategoryLabelEnum.SUB_TOP,
        colors: ['red'],
        imageUrl:
          'https://www.sportyfied.com/thumbs/regular/o60002-21_front_700x700.png',
      },
      {
        uuid: '5',
        name: 't-shirt levis',
        categoryLabel: CategoryLabelEnum.SUB_TOP,
        colors: ['red'],
        imageUrl:
          'https://www.sportyfied.com/thumbs/regular/o60002-21_front_700x700.png',
      },
      {
        uuid: '6',
        name: 't-shirt addidas',
        categoryLabel: CategoryLabelEnum.SUB_TOP,
        colors: ['red'],
        imageUrl:
          'https://www.stihl.fr/content/dam/stihl/media/pim/95746.jpg.transform/StihlImageGallery-mq4/img.jpg',
      },
      {
        uuid: '7',
        name: 't-shirt levis',
        categoryLabel: CategoryLabelEnum.SUB_TOP,
        colors: ['red'],
        imageUrl:
          'https://www.sportyfied.com/thumbs/regular/o60002-21_front_700x700.png',
      },
];

export const MainTopGarmentsData: SubGarnment[] = [
    {
        uuid: '1',
        name: 'Manteau 1',
        categoryLabel: CategoryLabelEnum.MAIN_TOP,
        colors: ['Rouge et blanc'],
        imageUrl:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcvKYIkt8Yk9B6ouT8ITqkfwnB0RnVYKgLuw&s',
      },
      {
        uuid: '2',
        name: 'manteau 2',
        categoryLabel: CategoryLabelEnum.MAIN_TOP,
        colors: ['red'],
        imageUrl:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDimJgbUYiV5Gs2zuoVv1gITIaTnDpxCK7DA&s',
      },
      {
        uuid: '3',
        name: 'meanteau 3',
        categoryLabel: CategoryLabelEnum.MAIN_TOP,
        colors: ['red'],
        imageUrl:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkWvgnNJtv7rpV5ySTI6bYcA1gIb-Q8vqFag&s',
      },
      {
        uuid: '4',
        name: 'meanteau 4',
        categoryLabel: CategoryLabelEnum.MAIN_TOP,
        colors: ['red'],
        imageUrl:
          'https://edelweissetculottecourte.com/wp-content/uploads/2019/11/veste-noire-homme-steinbock.png',
      },
      {
        uuid: '5',
        name: 'meanteau 5',
        categoryLabel: CategoryLabelEnum.MAIN_TOP,
        colors: ['red'],
        imageUrl:
          'https://edelweissetculottecourte.com/wp-content/uploads/2020/10/veste-tweed-homme-steinbock.png',
      },
      {
        uuid: '6',
        name: 'meanteau 6',
        categoryLabel: CategoryLabelEnum.MAIN_TOP,
        colors: ['red'],
        imageUrl:
          'https://edelweissetculottecourte.com/wp-content/uploads/2019/11/veste-noire-homme-steinbock.png',
      },
      {
        uuid: '7',
        name: 'meanteau 7',
        categoryLabel: CategoryLabelEnum.MAIN_TOP,
        colors: ['red'],
        imageUrl:
          'https://images.bellefashion.sk/e6cffee547427360b0b54fc2556f40de/47348666-mango-jacke-niagara-kaki.jpg',
      },
]


export const ShoesGarmentsData: SubGarnment[] = [
  {
      uuid: '1',
      name: 'Chaussure 1',
      categoryLabel: CategoryLabelEnum.SHOES,
      colors: ['Rouge et blanc'],
      imageUrl:
        'data:image/jpeg;base64,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',
    },
    {
      uuid: '2',
      name: 'Chaussure 2',
      categoryLabel: CategoryLabelEnum.SHOES,
      colors: ['Rouge'],
      imageUrl:
        'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhUUExIWFhUXFRcVFxgVFxcXGhoXFxYYFxgYGRgYHygiHRolHRUYIjEhJSkrLi4uGh8zODMtNygtLisBCgoKDg0OFxAQGi0fHR0tLS0tLS0tLS0tLS0tLS0tLS0tLSstLS0tLS0tLS0rLSsrKy0tKy0tLS0tKy0tLS03Lf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABQYCBAcDAQj/xABFEAABAwIDBAcECAMGBgMAAAABAAIDBBESITEFBkFREyIyYXGBoUJSkbEHFCMzYnLB0VOS8EOCorLh8RZjc4PC0iRUk//EABkBAQEBAQEBAAAAAAAAAAAAAAABAgMEBf/EACERAQEBAQACAgMAAwAAAAAAAAABAhEhMQMSE0FRBBRh/9oADAMBAAIRAxEAPwDuKIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIi8552saXPcGtGpcQAPElB6IoEb50GPB9chv3us3yeeqfipyN4cAQQQcwQbg+BTgyREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQau1K0QQySuzEbHPI54Wk29FwKpbtHajzJI4hmI4S8kMaP+WzkNL2ztmV1r6Ua3otnyfjcyM/lLgXf4WuXP92tp4qcMJs6Lq5cR7J+HyTWrnPYuZ28Qr9ycI+0qMR5AWA87m62dmy1+zjippS6O9zE67mH+7+osVv1k1yveiqOBzBXm/Nrrr+OcX3czfiCvGD7qcC7onHXmWH2h6j1VrXEdr7CDyJIXFkoOJjwbHEMxcjjlk5XTcHfc1B+rVXUqm5C+QlA4j8WWnHUch6M6mp4crLF6REVQREQEREBERAREQEREBERAREQEREBERAREQEREHM/plrwPq0J0eZHOHdYNH+Yrleza8wvve+Hquz7TL2BHhl6d6tX0zVuPaGAH7uFjfNxLz6OHwVJr32c2Qe0P0sR4WsPiu0z3PKz3l6uD5g6xBuDmF600maq2z67CPwE5fhdyP8AWnmpujnBOq+d8vx3FevG5qLNSTcDoV4ba2QJ2iSM4Z482kGxJGYz56ELGmW6w9bxF/gs51ZexdZ6sW4G+4qQKepOCqblnkJAOI/Fzb5jiBeVxXbuw2z9dpwStzDhlppc8Lc1r7P+kWuiiLHSxvAOESvbidlwFj1zlqQe85r24v5PMebU+vt3JFyGH6YnhzGvpmke07EW3zzwtztlzJXVqGrErGvAcMTQ6zwWuF+YOhVubGZWwiIooiIgIiICIiAiIgIiICIiAiIgIiICEovOoNmu/Kfkg/Nu/tSZK+pcdelI8m2a30AUPNnC3udbyOI8u8K8b9bvue4yMbeVjeu0ayRtybM3m4CzXjuB0OdHd91/e/f/ANV3l8MVrQSYTzByI0uFYth7SEZzZ0rOXtt8uI/bgq0sgmszU5SWy9jpUW1qV4uyVrfwv6vwJy9VjUbdp2Fp6UGx0b1joRwXP/rT+JDvzNa48eJHesTUP0DrD8IDf8q4/wCrnrr+bS17c3h6RpY0GNpyJceuR7uFtyL96i9n0T5/uoJ5cIscDeyO+wdbjxF1q7NlBYYzfnYe03Uj8ze0L/iHELo25u8dHTUsccszonwvke9rWkiYSA4H9kkjC5pAyPVHBdZiYnMxztur5aewvo+qRNDM+JlmPDyyV4a7I3zwYgc88+WYC6TvFt9tFE2SVrjd4YAzPMgnMmwAsDqsqLa4ma10cMpa4XBkb0QsdMn9b/CsdqUD6qN0MzIuieLGznlwsbgtOEAEEX0Ut77ExsyvZPG2WM3a4XGo42IIOhBBHktpQVftSnoY4w84G5Rsa0E5AaADgApxrri4XOxp9REUBERAREQEREBEUTvRtxlFTPnfnhya29sTz2Wg/rwAJ4IJZYh4PEL857d37rq1xa177O0jhDgLeDc3f3iVpbP3Zq3Wk60bhewzDuGfVzHwVvJ7pJa/TaLh2yd6Nq0P3hNRGNWydYgdz+2PPJdH3Y39pK2zQ7opT/ZyWBP5XaO8s+5SefR6WpERAWL23BHMWWSIKXtGjD+q67XNddrm5OY4e00/0CDY3BXPt592ukNm4IpybgdmGc55sOkcpxXLDx05rsm1NndJ1m5PHr3FVisgBuyRgzyLXgEEd4ORC1KnHA6qlfE8skaWPac2uFiF5LsG293mSswuaZGDs53li/6Tz22/8t/kdAuZ7b2I+mIJIfG4kMkaCASNWkHNrxxacwus0zYjQVkAvNZtcuiM43lpBGRBBB7wpYWka0gC4PVFsr9oxHuOZbz6zeAURZe9HNhOd7HI2yIzuC08HAi4P7oOv0v0lUpcC2Ope+Uj7NrGuLHWAwssQXAm54nPyVmp9uTP7Oz6kd8hgj9DJf0XI92doR0tWyokaSwBzXlg7JkbZsrBwDgdOBxDkFftnfSFAXNgjZU1Tg0deOIXefacWXFuZysLrlqc9LKsTqY1MkZqKQtET+lYTJG8YsJaLhpvxv4gLel21DHI2MyXe4gYGgvcL8S1oJa3vNgtmGQloJaWk8CQSO42JF/ArXmMFOHyu6OIOOKR5wsubWu53E2AGfJY9tJUIq9sbeykqJjBFNifbEBhcAba4SRY5Z5KwrNnFERFAREQEREBcv8AprlBFKxx6uJ73Acuq2/+IjzXUFyf6bB9pTE6YXtd4OIz8sN1rPtKyoaaGBgELGhth2bZ95dx9Vr1NWS7/U/7eiht3NpYojE49ePLxbwI+XwWy6TNeL5OzVlenHLOpumqQ6wd6/of9lGbX3XglubYSfaaLZ/iH65d6whmUtR1XsnT+slmas9Lcoug3h2ls2wcfrVOPeJJDe5+rfO45Lo27e+dJWgdHIGycYpLNeD4HteIuqNU7WgicW9aR9wBHFa+fB7zk31PcrHsjdSMuE0tLBE8i3RsaJLDvc/q4uZa0eJXsx9rO6efXJfC2Ve0oonBr3gOdmG5lxF7Xwi5tfjotoG6i6OgZAD0UYF8yGgC5+Xloqtuvt2uqZZccIjETiMJ7OLhG52uK1rkAi2fK+/qz1flr1lGyUWcPA8R4FKaqxagtd7pt6EZEf1kthZVUtpbNfFn2mcxw8eSgdoUDZQ7JpxCzmuHUeBoHgZ3HB46zctRkelEKB2psC93Q5HizgfDkfTwWpRwXeLdswuLmOHRXIOMjFG4AEseBqbEEOGTgRbVRgo26Fzr9+AH4OcD6Lru06LHdrmg6B0b8gS3Q31Y8XyePMEWtzbb+7LocUkeJ8Q7YcPtIif4gGo5PHVK650zYipaNwF29YanIggcyDnbv0zC8GuWdPUlls7gG9iTrzBGYPeFuljJs9CBmRa4t7zR2hl2gLi+d9V0ZZbOqL9Q55HDfiCOtGc8g7Ox1Drd6tu4e1oaQztfIIjKIzHM5heLMcS5j2tNxe9jnkR4XpAoJfZbi72dYemik2tfIw4m21uT1RjDb4wTYdYABwve4BHJLOjoO8P0pYHFlIxrwB96/EBfuZYEjxIXOdt18taA+WR0krXDI6XzLS1t7AEXBsBoOa+x7MFrvcSPw9Vv/wCjwByPVxXuvYVbIxZg/lu0cdX9t3D3Rrkp9YdbFC2aOSJ+PopG2wjMyXBNuq250tra45rtm5m8X1qMteQJmdoZNJHB+AONhw8eV1wM1rjkDhHENAaPO2vndSO7u1n0szJo9WnMXyc32mnuI/RNY+0JX6ORaeyNpMqYWTRm7XC/eDxae8HJbi8roIiICIiAuTfTL1po2cegLh4h9/0K6yuNfS7PbaMXIQsB8HSSX9CtY9pVAoqstcCDZ4yB4Ee679/9xY6TajJMj1XcWnL4FVKoZhcRwBNvDh6IKggZgOHfw8xnbuWvk+HOzG7ld5q2OMXc4Du1PkFEVm3HvJYy7deqCA8/mPs/lGZtZQRqbjqgM7xcn4nTyXgBZZ+P/HznzfLWvltWXdWEGvphI8NZ0oc0jJt2gubrxLg0Z5i66VvlvjNRsjjhiD6iQgNY4Fx436jDc8OPFchgqMYwutcka5Bx0BJ4Pz7Wh9rvnty9oQ0dWZZr4DG+MSYcTo3utYubrezSO8E2uF21lzlXXZuwdqVzQ+vrHwMcLiCnHRuHLE4aeBxeSvOy6BsEYY1znW9qQ4nHIDrOtmbAC/cFRYN+5ZpY6aijZUPLOtNJjhZcDrPwG5DPE3zAF1Y6TYUsoDqyqfIT/ZwkwwjuAb13eLneQXO/9aQ2yJtoVVXPHMRDHHk5rWnLET0bopAQSTa+I5ZacBcmVboRaU3YB94bAjnjAyt+IeYFrrOho2RNwRtwtGguT8yVrV1JTNxSzNjyuS+WxsOOb+yO4WUvkTDHAgEG4OYI4hfVQv8AjmggJbDJk1pPRiOQRm2dmHDYE8LZH1Vu2LteGqiEsLw5p8i0+64cCs3Nh182rspkw5PGjv0PMKl1uz3B1j1JG3DXWvkdQR7UbuLTr3EAjoijdtbP6RuIDrt07xxakquD71bsYcc0LMOCxnhGfR30kjPtQOsbH2cwbWIFUaSCLajPJd0rqMus+OwlZfDi7Lge1FJzY7jyNjwXNd5d3QA6op2ERB1poj26aTi1w9ziHDKxHCxXbOv0xYgI6x3tBru9wz/mFncOa9XVx4BoPO2I/F5JHktEBfQuiPd0pcbkkk8SSSvoWDQswtIzavaNy8QvQFVF7+jPeb6vN0Mh+ylIFzo2TQO8DofLku0L8vtcu4fRtvH9ap+jeftYgGm+rmey7x4Hw71w+XH7jeb+lwREXBsREQFxn6ZKVxqmy+zgbGTyc277HxDwQuzKqb17M6RzrNa7E0B8b+xI0XsCRm1w4OGny1m8qVwXabbuDveaHen+i0yFd9sbq4iGU7uu2/2EzmslAPuk9WRvJwNlVdobMmgOGWJzDwxAi/gdD5Ltmys2I8LNqYV8ctoXW9T1V7Bx0FgSL5WthcNS3v1AGXJR3Sc16goLJu/tU0M5mZGHtMZZJGXWOB9jcOHC4BDgDbjqrZsDeisrp2QUzhTwsYC8k9K8RssHEveM3G4Ay1NySuc0lXawdew0I1be98Pcb5jQ+ql9l7RkppBNAWhxaW2IuyRpALm2OQPEsuLZW4BS56dds27vJT0cQkkde/Ya3rOebXs0fqclxnezeCXaRONxYGnEyFpu3LR2XbfzBHgo/a+2p6tzGvAswYI4o2BjGD3WsHh8l9ZAxjAXYS7M4u0NLWY3RxBGbjkDzOkmeLa86WB7mND8j7OrnEZ3wsGZBtfOw15lSWza00jsUcr2PyvZ2eXNjDbXg53PJRNRWF17XAOudy7M5udqdfDuXkCunGXdNyN+I6z7KTqTgaHISAaubyPNvwuNLivy6x5aQQSCDcEEggjQgjQrqu4v0i4rQVrgHZBkxyB7pOR/FoeNtTw38XPMbmls21SYH4gOq7Xud/r+6gNo7MLndNA4RzgYcRF2SM/hzN9pnI6t4cle6iEPaWnQ/wBAqtSwljsLuHqOYWJWnL9q7ssneRAz6vVAYnUkhGF49+mk0c3u+WiptRTuY9zHtLHtNnNcC0g+BXfNo7LhqWYJmBwBu03LXMd7zHjNru8KubZ2DLhtNEa+FuTXttHWRt8chMBy1PIrc3z2zxyZqzCsrt1BKT9SnbORrDJ9jUNtwMb7XtzFvBQVTRyRPLJGPY/3XNLT8DwXXOpWbHk1ZLGy+hbZfWKc3U226jqWSjQZOHvMPaHjxHeAoML0alnR+nKedr2te03a4BwI4gi4K9FTPou2gZKNrXew5zB4Czh6Ot5K5rxanLx1giIootDakJIDhw18FvogqtZRRTNwyxskbye0OHlfQ96jKnd0YC2N5LDrDOTLEfDFd7DyLTYcirjUUDXZjqn0+C0JaV7dRlzGYWuo45t/dAguMDXBwBc6BxxPA96N39rH3jMcRdVylpRbE8X453sGg2uQMyScgPHku719EyZuF1wQcTHtNnsdwcx3A/PQ3Cpu8e7rX4nTNdE4kE1EN5InEXsZYj1o+0Tdt25nNdJvntLHPHOiOVh5x4R8WOv6FeX1Jjs23H5C198vddhcPgf33dsbCmp7OeA6N3YljOON3g4fI2Ki3BdJ5ZZuoCD94w24Ouw/B4HL5LaoqV4v1mlp7TW/aAgEa4ThGupcLc1qsq3tFg9wHIE2+HmV8lqXv7T3O/MSbfFUSEtS1t87kixsbuP55Ba+fu66ErRklLjcnXy+A4BeN1kFUZWWQWN19uqMwVldYBAVR0TcLf40+GCpJdDox+pj5A82eo8NOrVELZ2NLXAgjE1wsQQe/iCvzQ1yt25W+clE4Mdd8BObL5tvq5l9D3aH1XLfx98xqa/rqUkLmGzhb5HwWbCpelqI6iNr2EPY8XB/rQrWm2bbsHyP7rj3+tIbauxaeqt08LXkaP7L2/lkbZw+KiKvdyoa3DFUMqIv4Fe3pAPyTDrDuurM5pGRFvFfWlByzamw4G36emqqI++wfWqf+ZvWHxUSN2mv+4raSUcB0vRP/kktb4rtzHcitCt2HSzG8tLC883RtxfzAXWpvUTkckbuPWH2I/Hpobf5l6RbptjP/wAqspom8Q2QSSeAY3j5rox3I2fe/wBTj+L/AJYlI0GwqWE3ipoWHmGNxfzHP1V/Jo+saW5kIGHoo3x07AWx9Jk+VzyMUrhwFmgDxPCyuS0aYXd6reXKtCIigIiICIiDWqKNru48x+oUbLC5hzHgRoptfHNBFjor0Uqt2GOs6ANaXfeRPF4JeeNnsuPvtz53XOtt7qYi91K1wczOWmdnLH3s/iR8iL+fDs9VS4Mx2fkovaWzI5wMV2vbmyRhwyMPNrh8jcHiFrN56R+e3NzWK63tzd9ziTUUwqh/HprRVFvxxnqyHw+CqE+7FO84YK5jX/wqxroHjuuRYnwC6z5IzcqogVin3Hrmi7YOkHOJ7Hg/A39FHS7v1be1Szj/ALT/ANlv7RONAFfbrZOzpuMEo8Y3/sg2dMdIZT4RvP6J2HGuFkFvQ7CqnaUs5/7Un7KUp9yqw5viELeLpnsjA+Jv6K/aHKgQFvbJ2XLUSCOJhe7jbQDm46Ad5U/s/ZFG1wYZX1suX2VEwub/AH5jkB35FXTZ+70sjMEwZS0//wBamPWf/wBefU94Gq535f4sy2dxp+jtTxO6SGFjhLKOy6d7w7BGeIaMWfeFeVDU0DImBkbAxjRYNaLAKVpz1R4LhW2T2A5EX8VqyUA9kkeoW4igi3UbxpY+B/dYGJ49k/C6l0V6IgNPJ3wK9o6dx4W8f2UiidHnDCGjv4leiIoCIiAiIgIiICIiAQtCpo7Zt+H7LfRBBhedXRRSi0sbJBye0O+YUzPStdnoeYWi+keOF/D9lrorb9y6K92wmM84ZJI/Rrrei+DdRo7FbXM7hOSP8QKnyba5JdXiIIbuSDTaVb/Ow/8Aih3akOu0q3yewfJqnrr4XIID/hFp7dZWv7jUED0Cyi3LoQbug6Q85nvk9HG3opwuWJegyp4WRtwxtaxo9ljQ0fALO68m3OgJ8FtwUTj2svmnpXnG0k2ClY2WAC+RRBoyCzWbQREUBERAREQEREBERAREQEREBERAREQEREHwi68jSs90L2RBrmiZy9Svn1FnI/ErZROjWFCzl6lejadg0aPgvVEBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERB//9k=',
    },
    {
      uuid: '3',
      name: 'Chaussure 3',
      categoryLabel: CategoryLabelEnum.SHOES,
      colors: ['Bleu'],
      imageUrl:
        'data:image/jpeg;base64,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',
    },
    {
      uuid: '4',
      name: 'Chaussure 4',
      categoryLabel: CategoryLabelEnum.SHOES,
      colors: ['Noir'],
      imageUrl:
        'data:image/jpeg;base64,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',
    },
    {
      uuid: '5',
      name: 'Chaussure 5',
      categoryLabel: CategoryLabelEnum.SHOES,
      colors: ['Gris'],
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_dqgsJL_WYL6MjdYHNs25Bnwhb8TvN_vxmw&s',
    },
    {
      uuid: '6',
      name: 'Chaussure 6',
      categoryLabel: CategoryLabelEnum.SHOES,
      colors: ['Marron'],
      imageUrl:
        'https://edelweissetculottecourte.com/wp-content/uploads/2019/11/chaussure-marron-homme.png',
    },
    {
      uuid: '7',
      name: 'Chaussure 7',
      categoryLabel: CategoryLabelEnum.SHOES,
      colors: ['Kaki'],
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdvljR8f2-M2b2JoEdrhLd11ca4kgkx0L-FA&s',
    },
];


export const BottomGarmentsData: SubGarnment[] = [
  {
      uuid: '1',
      name: 'Pantalon 1',
      colors: ['Noir'],
      categoryLabel:CategoryLabelEnum.BOTTOM,
      imageUrl:
        'data:image/jpeg;base64,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',
    },
    {
      uuid: '2',
      name: 'Pantalon 2',
      categoryLabel:CategoryLabelEnum.BOTTOM,
      colors: ['Bleu marine'],
      imageUrl:
        'https://static.cimalp.fr/36637-large_default/pantalon-leger-et-resistant-de-voyage.jpg',
    },
    {
      uuid: '3',
      name: 'Pantalon 3',
      colors: ['Gris'],
      categoryLabel:CategoryLabelEnum.BOTTOM,
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE2i30JI_ZZFN8IMLevXRQciO7t-Wmd2la45r8xlsZXmXi7B_zTzWh9svJqKG5ijYdUUQ&usqp=CAU',
    },
    {
      uuid: '4',
      name: 'Pantalon 4',
      colors: ['Beige'],
      categoryLabel:CategoryLabelEnum.BOTTOM,
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBlxSNNF35es29T-TPczr5En8SQt32lk0DDppZn0mP389nqody_l9W75W9ikeWGgrfp8s&usqp=CAU',
    },
    {
      uuid: '5',
      name: 'Pantalon 5',
      categoryLabel:CategoryLabelEnum.BOTTOM,
      colors: ['Kaki'],
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-9rvREnRFVJBaMjRamWRieG_5tcoYhoJLAevVmOuxLWBAKolPGTlo9OnjW3eco4EUJ8E&usqp=CAU',
    },
    {
      uuid: '6',
      name: 'Pantalon 6',
      categoryLabel:CategoryLabelEnum.BOTTOM,
      colors: ['Vert olive'],
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBGNBDDagzdKoFwJXsaqV1693592QEsexNtR8UlWKmmKvecuBBwiKbslepU6Ol_ht4oSE&usqp=CAU',
    },
    {
      uuid: '7',
      categoryLabel:CategoryLabelEnum.BOTTOM,
      name: 'Pantalon 7',
      colors: ['Marron'],
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVWfm3_m414F_ljmtCG8L3l2tceJXtVgYtpy-aXppmk-czQi9k7RcA_GxiLgIt7TzWbek&usqp=CAU',
    },
];

export const garmentsDataByCategory: Record<CategoryLabelType, SubGarnment[]> = {
  'MAIN_TOP': MainTopGarmentsData,
  'SUB_TOP': SubTopGarmentsData,
  'BOTTOM': BottomGarmentsData,
  'SHOES': ShoesGarmentsData
}
