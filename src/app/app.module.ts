import {NgModule, ErrorHandler} from '@angular/core';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {MyApp} from './app.component';
import {AboutPage} from '../pages/about/about';
import {EventoPage} from '../pages/evento/evento';
import {ProgramaPage} from '../pages/programa/programa';
import {KeynotesPage} from '../pages/keynotes/keynotes';
import {SponsorsPage} from '../pages/sponsors/sponsors';
import {KudosPage} from '../pages/kudos/kudos';

@NgModule({
    declarations: [
        MyApp,
        EventoPage,
        ProgramaPage,
        KeynotesPage,
        SponsorsPage,
        KudosPage,
        AboutPage
    ],
    imports: [
        IonicModule.forRoot(MyApp)
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        EventoPage,
        ProgramaPage,
        KeynotesPage,
        SponsorsPage,
        KudosPage,
        AboutPage
    ],
    providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {
}
