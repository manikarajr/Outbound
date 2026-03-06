import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SafeHtmlPipe } from '../../shared/pipes/safe-html.pipe';
import packagesData from '../../data/packages.json';

@Component({
  selector: 'app-packages',
  imports: [CommonModule, RouterLink, SafeHtmlPipe],
  templateUrl: './packages.html',
  styleUrl: './packages.css',
})
export class Packages {
  packages = packagesData.packages;
  services = packagesData.services;
}
