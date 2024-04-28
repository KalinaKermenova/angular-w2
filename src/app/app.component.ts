import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  index: number = 0;

  isRatingOver = false;

  books = [
    {
      "title": "The War of the Worlds",
      "description": "A famous science fiction novel in which humanity faces off against aliens with terrifying technologies and strategies to conquer Earth.",
      "author": "H. G. Wells",
      "numberOfRatings": 0,
      "rating": 0
    },
    {
      "title": "1984",
      "description": "A dystopian social science fiction novel and cautionary tale by George Orwell, in which critical thought is suppressed under a totalitarian regime.",
      "author": "George Orwell",
      "numberOfRatings": 0,
      "rating": 0
    },
    {
      "title": "To Kill a Mockingbird",
      "description": "A novel by Harper Lee that deals with the serious issues of rape and racial inequality in the American South.",
      "author": "Harper Lee",
      "numberOfRatings": 0,
      "rating": 0
    },
    {
      "title": "The Catcher in the Rye",
      "description": "A novel by J. D. Salinger, narrated by a teenager who is disillusioned by the adult world.",
      "author": "J. D. Salinger",
      "numberOfRatings": 0,
      "rating": 0
    },
    {
      "title": "Pride and Prejudice",
      "description": "A romantic novel of manners by Jane Austen, set in early 19th-century England.",
      "author": "Jane Austen",
      "numberOfRatings": 0,
      "rating": 0
    }
  ]
  

  addRating(rating: number) {
    const book = this.books[this.index];
    book.rating += rating;
    book.numberOfRatings++;
    this.moveToNextBookOrFinish();
  }

  moveToNextBookOrFinish() {
    if (this.index < this.books.length - 1) {
      this.index++;
    } else {
      this.isRatingOver = true;
    }
  }

  calculateRating() {
    const book = this.books[this.index];
    const numberOfRatings = book.numberOfRatings || 1;
    return (book.rating / numberOfRatings).toFixed(2);
  }

  resetReview() {
    this.index = 0;
    this.isRatingOver = false;
  }

  confirmReset() {
    if (confirm('Are you sure you want to reset and rate the books again?')) {
      this.resetReview();
    }
  }

  finishReview() {
    alert('Thank you for participating!');
  }

  confirmFinish() {
    if (confirm('Are you sure you want to finish rating books?')) {
      this.finishReview();
    }
  }
}