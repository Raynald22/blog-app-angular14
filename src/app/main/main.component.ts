import { Component, OnInit } from '@angular/core';
import { BlogCard } from '../models/blog-card.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  posts: BlogCard[] = [
    {
      id: 1,
      mainImageUrl: 'https://staticg.sportskeeda.com/editor/2022/12/d39ac-16706960817344-1920.jpg',
      category: 'My Hero Academia',
      title: 'Dabi',
      description:
        'Dabi (荼だ毘び Dabi?), real name Toya Todoroki (轟とどろき燈とう矢や Todoroki Tōya?), is a major antagonist in the My Hero Academia manga and anime series.He is the eldest son of the Pro Hero Endeavor, driven insane due to his neglectful and selfish actions, and becoming a villain to enact revenge. He became affiliated with the League of Villains, a former member of the organizations since disbanded Vanguard Action Squad, and later one of the nine lieutenants of the Paranormal Liberation Front.',
      authorImageUrl: 'https://source.unsplash.com/7YVZYZeITc8/30x30',
      authorName: 'John Smith',
      postDate: '10th August 2020',
    },
    {
      id: 2,
      mainImageUrl: 'https://cdnx.kincir.com/insecure/rs:fill:764:400/aHR0cHM6Ly9raW5jaXJpbWFnZS5zMy1hcC1zb3V0aGVhc3QtMS5hbWF6b25hd3MuY29tL3Byb2R1Y3Rpb24vMjAyMS0wNS8xNmJ5OS9teS1oZXJvLWFjYWRlbWlhLWZha3RhLXNob3RvLXRvZG9yb2tpfjIzMjNjNTcwLWJiNTctNGE3OC04ZmI5LWQyZjQ2ZGNlMzBlMi5qcGc=',
      category: 'My Hero Academia',
      title: 'Todoroki Shoto',
      description:
        `Shoto Todoroki (轟とどろき焦しょう凍と Todoroki Shōto?), also known as Shoto (ショート Shōto?), is the tritagonist of the My Hero Academia manga and anime series.

        He is a student in Class 1-A at U.A. High School, where he got in through official recommendations[3] and is training to become a Pro Hero. He is the youngest son of Endeavor, the former No. 2, and current No. 1, Pro Hero.`,
      authorImageUrl: 'https://source.unsplash.com/7YVZYZeITc8/30x30',
      authorName: 'John Smith',
      postDate: '10th August 2020',
    },
    {
      id: 3,
      mainImageUrl: 'https://www.greenscene.co.id/wp-content/uploads/2022/07/Gojo-696x497.jpg',
      category: 'Jujutsu Kaisen',
      title: 'Gojo Satoru',
      description:
        `Satoru Gojo (五ご条じょう悟さとる Gojō Satoru?) is one of the main protagonists of the Jujutsu Kaisen series. He is a special grade jujutsu sorcerer and widely recognized as the strongest in the world. Satoru is the pride of the Gojo Family, the first person to inherit both the Limitless and the Six Eyes in four hundred years. He works as a teacher at the Tokyo Jujutsu High and uses his influence to protect and train strong young allies.`,
      authorImageUrl: 'https://source.unsplash.com/7YVZYZeITc8/30x30',
      authorName: 'John Smith',
      postDate: '10th August 2020',
    },
    {
      id: 4,
      mainImageUrl: 'https://source.unsplash.com/RP6Ba_6U154/400x250',
      category: 'freelancing',
      title: 'The Road to Freedom',
      description:
        'Freelancing can be a great way to experience true freedom in your life. You can work anywhere, everywhere...',
      authorImageUrl: 'https://source.unsplash.com/7YVZYZeITc8/30x30',
      authorName: 'John Smith',
      postDate: '10th August 2020',
    },
    {
      id: 5,
      mainImageUrl: 'https://source.unsplash.com/I2YSmEUAgDY/400x250',
      category: 'freelancing',
      title: 'The Road to Freedom',
      description:
        'Freelancing can be a great way to experience true freedom in your life. You can work anywhere, everywhere...',
      authorImageUrl: 'https://source.unsplash.com/7YVZYZeITc8/30x30',
      authorName: 'John Smith',
      postDate: '10th August 2020',
    },
    {
      id: 6,
      mainImageUrl: 'https://source.unsplash.com/hpTH5b6mo2s/400x250',
      category: 'freelancing',
      title: 'The Road to Freedom',
      description:
        'Freelancing can be a great way to experience true freedom in your life. You can work anywhere, everywhere...',
      authorImageUrl: 'https://source.unsplash.com/7YVZYZeITc8/30x30',
      authorName: 'John Smith',
      postDate: '10th August 2020',
    },
    {
      id: 7,
      mainImageUrl: 'https://source.unsplash.com/2TQwrtZnl08/400x250',
      category: 'freelancing',
      title: 'The Road to Freedom',
      description:
        'Freelancing can be a great way to experience true freedom in your life. You can work anywhere, everywhere...',
      authorImageUrl: 'https://source.unsplash.com/7YVZYZeITc8/30x30',
      authorName: 'John Smith',
      postDate: '10th August 2020',
    },
    {
      id: 8,
      mainImageUrl: 'https://source.unsplash.com/cGwfkwHmt98/400x250',
      category: 'freelancing',
      title: 'The Road to Freedom',
      description:
        'Freelancing can be a great way to experience true freedom in your life. You can work anywhere, everywhere...',
      authorImageUrl: 'https://source.unsplash.com/7YVZYZeITc8/30x30',
      authorName: 'John Smith',
      postDate: '10th August 2020',
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
