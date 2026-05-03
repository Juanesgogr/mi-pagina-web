import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './about.html',
  styleUrls: ['./about.css']
})
export class About implements AfterViewInit {

  ngAfterViewInit() {
    const fadeElements = document.querySelectorAll('.fade-up');
    const cards = document.querySelectorAll('.card');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    }, { threshold: 0.2 });

    fadeElements.forEach(el => observer.observe(el));
    cards.forEach(card => observer.observe(card));
  }

}