import {Component, ViewChild} from '@angular/core';
import {Nav, Platform} from 'ionic-angular';
import {StatusBar, Splashscreen} from 'ionic-native';
import {EventoPage} from '../pages/evento/evento';
import {ProgramaPage} from '../pages/programa/programa';
import {KeynotesPage} from '../pages/keynotes/keynotes';
import {SponsorsPage} from '../pages/sponsors/sponsors';
import {KudosPage} from '../pages/kudos/kudos';
import {AboutPage} from '../pages/about/about';

@Component({
    templateUrl: 'app.html'
})
export class MyApp {

    @ViewChild(Nav) nav: Nav;
    menuItems: [{ label: string; component: any; }] = [
        {
            label: 'El evento',
            component: EventoPage
        },
        {
            label: 'Programa',
            component: ProgramaPage
        },
        {
            label: 'Keynotes',
            component: KeynotesPage
        },
        {
            label: 'Sponsors',
            component: SponsorsPage
        },
        {
            label: 'Kudos',
            component: KudosPage
        },
        {
            label: 'Sobre esta aplicación',
            component: AboutPage
        }
    ]

    constructor(platform: Platform) {
        platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            StatusBar.styleDefault();
            Splashscreen.hide();
        });
    }

    openPage(page) {
        this.nav.setRoot(page.component);
    }
}
