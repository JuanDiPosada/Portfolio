import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./components/navbar/navbar";
import { Hero } from "./components/hero/hero";
import { About } from "./components/about/about";
import { Projects } from "./components/projects/projects";
import { Contact } from "./components/contact/contact";
import { Footer } from "./components/footer/footer";
import { Skills } from "./components/skills/skills";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Hero, About, Projects, Contact, Footer, Skills],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'Portfolio';
}
