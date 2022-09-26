import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './header/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BriefComponent } from './header/MENFILE/INNERWEAR/brief/brief.component';
import { TrunkComponent } from './header/MENFILE/INNERWEAR/trunk/trunk.component';
import { BoxerbriefComponent } from './header/MENFILE/INNERWEAR/boxerbrief/boxerbrief.component';
import { InnerbriefComponent } from './header/MENFILE/INNERWEAR/innerbrief/innerbrief.component';
import { TanktopComponent } from './header/MENFILE/APPAREL TOPS/tanktop/tanktop.component';
import { TShirtComponent } from './header/MENFILE/APPAREL TOPS/t-shirt/t-shirt.component';
import { HoodieComponent } from './header/MENFILE/APPAREL TOPS/hoodie/hoodie.component';
import { BoxershortComponent } from './header/MENFILE/APPAREL BOTTOM/boxershort/boxershort.component';
import { ShortComponent } from './header/MENFILE/APPAREL BOTTOM/short/short.component';
import { BermudasComponent } from './header/MENFILE/APPAREL BOTTOM/bermudas/bermudas.component';
import { JoggerComponent } from './header/MENFILE/APPAREL BOTTOM/jogger/jogger.component';
import { TrackpantComponent } from './header/MENFILE/APPAREL BOTTOM/trackpant/trackpant.component';
import { PyjamaComponent } from './header/MENFILE/APPAREL BOTTOM/pyjama/pyjama.component';
import { SleevelessComponent } from './header/MENFILE/VEST/sleeveless/sleeveless.component';
import { SleevedComponent } from './header/MENFILE/VEST/sleeved/sleeved.component';
import { GymComponent } from './header/MENFILE/VEST/gym/gym.component';
import { EverydaybraComponent } from './header/WOMENFILE/BRAS/everydaybra/everydaybra.component';
import { TShirtbraComponent } from './header/WOMENFILE/BRAS/t-shirtbra/t-shirtbra.component';
import { ActivebraComponent } from './header/WOMENFILE/BRAS/activebra/activebra.component';
import { SleepbraComponent } from './header/WOMENFILE/BRAS/sleepbra/sleepbra.component';
import { PlussizebraComponent } from './header/WOMENFILE/BRAS/plussizebra/plussizebra.component';
import { HipstersComponent } from './header/WOMENFILE/PANTIES/hipsters/hipsters.component';
import { BikinisComponent } from './header/WOMENFILE/PANTIES/bikinis/bikinis.component';
import { ShortiesComponent } from './header/WOMENFILE/PANTIES/shorties/shorties.component';
import { FullbriefComponent } from './header/WOMENFILE/PANTIES/fullbrief/fullbrief.component';
import { BoylegComponent } from './header/WOMENFILE/PANTIES/boyleg/boyleg.component';
import { CroptropsComponent } from './header/WOMENFILE/INNERWARETOPS/croptrops/croptrops.component';
import { CamisolesComponent } from './header/WOMENFILE/INNERWARETOPS/camisoles/camisoles.component';
import { KurtaslipsComponent } from './header/WOMENFILE/INNERWARETOPS/kurtaslips/kurtaslips.component';
import { KurtislipsComponent } from './header/WOMENFILE/INNERWARETOPS/kurtislips/kurtislips.component';
import { TanktopsgirlComponent } from './header/WOMENFILE/APPARELTOPS/tanktopsgirl/tanktopsgirl.component';
import { TShirtgirlComponent } from './header/WOMENFILE/APPARELTOPS/t-shirtgirl/t-shirtgirl.component';
import { HoodiesgirlComponent } from './header/WOMENFILE/APPARELTOPS/hoodiesgirl/hoodiesgirl.component';
import { SleepdressComponent } from './header/WOMENFILE/APPARELTOPS/sleepdress/sleepdress.component';
import { ShortsgirlComponent } from './header/WOMENFILE/APPARELBOTTOMS/shortsgirl/shortsgirl.component';
import { CaprisgirlComponent } from './header/WOMENFILE/APPARELBOTTOMS/caprisgirl/caprisgirl.component';
import { TrackpantsgirlComponent } from './header/WOMENFILE/APPARELBOTTOMS/trackpantsgirl/trackpantsgirl.component';
import { LeggingsComponent } from './header/WOMENFILE/APPARELBOTTOMS/leggings/leggings.component';
import { PantsComponent } from './header/WOMENFILE/APPARELBOTTOMS/pants/pants.component';
import { ShortsboysComponent } from './header/KIDSFILE/APPARELBOTTOMS BOYS/shortsboys/shortsboys.component';
import { JoggersboysComponent } from './header/KIDSFILE/APPARELBOTTOMS BOYS/joggersboys/joggersboys.component';
import { TanktopsboysComponent } from './header/KIDSFILE/APPARELTOPS BOYS/tanktopsboys/tanktopsboys.component';
import { TShirtsboysComponent } from './header/KIDSFILE/APPARELTOPS BOYS/t-shirtsboys/t-shirtsboys.component';
import { HoodiesboysComponent } from './header/KIDSFILE/APPARELTOPS BOYS/hoodiesboys/hoodiesboys.component';
import { ShortforgirlsComponent } from './header/KIDSFILE/APPARELBOTTOMS GIRLS/shortforgirls/shortforgirls.component';
import { JoggerforgirlsComponent } from './header/KIDSFILE/APPARELBOTTOMS GIRLS/joggerforgirls/joggerforgirls.component';
import { CaprisforgirlsComponent } from './header/KIDSFILE/APPARELBOTTOMS GIRLS/caprisforgirls/caprisforgirls.component';
import { LeggingsforgirlsComponent } from './header/KIDSFILE/APPARELBOTTOMS GIRLS/leggingsforgirls/leggingsforgirls.component';
import { TanktopsforgirlsComponent } from './header/KIDSFILE/APPARELTOPS GIRLS/tanktopsforgirls/tanktopsforgirls.component';
import { TShirtforgirlsComponent } from './header/KIDSFILE/APPARELTOPS GIRLS/t-shirtforgirls/t-shirtforgirls.component';
import { HoodiesforgirlsComponent } from './header/KIDSFILE/APPARELTOPS GIRLS/hoodiesforgirls/hoodiesforgirls.component';
import { BriefforboysComponent } from './header/KIDSFILE/INNERWEAR BOYS/briefforboys/briefforboys.component';
import { TrunksforboysComponent } from './header/KIDSFILE/INNERWEAR BOYS/trunksforboys/trunksforboys.component';
import { VestsforboysComponent } from './header/KIDSFILE/INNERWEAR BOYS/vestsforboys/vestsforboys.component';
import { BoxershortsforboysComponent } from './header/KIDSFILE/INNERWEAR BOYS/boxershortsforboys/boxershortsforboys.component';
import { PantiesforgirlsComponent } from './header/KIDSFILE/INNERWEAR GIRLS/pantiesforgirls/pantiesforgirls.component';
import { BloomersforgirlsComponent } from './header/KIDSFILE/INNERWEAR GIRLS/bloomersforgirls/bloomersforgirls.component';
import { ShortiesforgirlsComponent } from './header/KIDSFILE/INNERWEAR GIRLS/shortiesforgirls/shortiesforgirls.component';
import { LoginComponent } from './header/login/login.component';
import { EnterdetailsComponent } from './header/login/enterdetails/enterdetails.component';
import { ShowdetailsComponent } from './header/login/showdetails/showdetails.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    BriefComponent,
    TrunkComponent,
    BoxerbriefComponent,
    InnerbriefComponent,
    TanktopComponent,
    TShirtComponent,
    HoodieComponent,
    BoxershortComponent,
    ShortComponent,
    BermudasComponent,
    JoggerComponent,
    TrackpantComponent,
    PyjamaComponent,
    SleevelessComponent,
    SleevedComponent,
    GymComponent,
    EverydaybraComponent,
    TShirtbraComponent,
    ActivebraComponent,
    SleepbraComponent,
    PlussizebraComponent,
    HipstersComponent,
    BikinisComponent,
    ShortiesComponent,
    FullbriefComponent,
    BoylegComponent,
    CroptropsComponent,
    CamisolesComponent,
    KurtaslipsComponent,
    KurtislipsComponent,
    TanktopsgirlComponent,
    TShirtgirlComponent,
    HoodiesgirlComponent,
    SleepdressComponent,
    ShortsgirlComponent,
    CaprisgirlComponent,
    TrackpantsgirlComponent,
    LeggingsComponent,
    PantsComponent,
    ShortsboysComponent,
    JoggersboysComponent,
    TanktopsboysComponent,
    TShirtsboysComponent,
    HoodiesboysComponent,
    ShortforgirlsComponent,
    JoggerforgirlsComponent,
    CaprisforgirlsComponent,
    LeggingsforgirlsComponent,
    TanktopsforgirlsComponent,
    TShirtforgirlsComponent,
    HoodiesforgirlsComponent,
    BriefforboysComponent,
    TrunksforboysComponent,
    VestsforboysComponent,
    BoxershortsforboysComponent,
    PantiesforgirlsComponent,
    BloomersforgirlsComponent,
    ShortiesforgirlsComponent,
    LoginComponent,
    EnterdetailsComponent,
    ShowdetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
