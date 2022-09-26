import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './header/home/home.component';
import { LoginComponent } from './header/login/login.component';

// routing for men parts
// routing of innerware
import { BoxerbriefComponent } from './header/MENFILE/INNERWEAR/boxerbrief/boxerbrief.component';
import { TrunkComponent } from './header/MENFILE/INNERWEAR/trunk/trunk.component';
import { InnerbriefComponent } from './header/MENFILE/INNERWEAR/innerbrief/innerbrief.component';
import { BriefComponent } from './header/MENFILE/INNERWEAR/brief/brief.component';

// routing of apparel tops
import { TanktopComponent } from './header/MENFILE/APPAREL TOPS/tanktop/tanktop.component';
import { TShirtComponent } from './header/MENFILE/APPAREL TOPS/t-shirt/t-shirt.component';
import { HoodieComponent } from './header/MENFILE/APPAREL TOPS/hoodie/hoodie.component';

// routing of apparel bottom 
import { BermudasComponent } from './header/MENFILE/APPAREL BOTTOM/bermudas/bermudas.component';
import { BoxershortComponent } from './header/MENFILE/APPAREL BOTTOM/boxershort/boxershort.component';
import { JoggerComponent } from './header/MENFILE/APPAREL BOTTOM/jogger/jogger.component';
import { PyjamaComponent } from './header/MENFILE/APPAREL BOTTOM/pyjama/pyjama.component';
import { ShortComponent } from './header/MENFILE/APPAREL BOTTOM/short/short.component';
import { TrackpantComponent } from './header/MENFILE/APPAREL BOTTOM/trackpant/trackpant.component';

// routing of vests
import{ SleevelessComponent } from './header/MENFILE/VEST/sleeveless/sleeveless.component';
import{ SleevedComponent } from './header/MENFILE/VEST/sleeved/sleeved.component';
import{ GymComponent } from './header/MENFILE/VEST/gym/gym.component';

// routing for women part

//routing of bras
import{ ActivebraComponent } from './header/WOMENFILE/BRAS/activebra/activebra.component';
import{ EverydaybraComponent } from './header/WOMENFILE/BRAS/everydaybra/everydaybra.component';
import{ PlussizebraComponent } from './header/WOMENFILE/BRAS/plussizebra/plussizebra.component';
import{ SleepbraComponent } from './header/WOMENFILE/BRAS/sleepbra/sleepbra.component';
import{ TShirtbraComponent } from './header/WOMENFILE/BRAS/t-shirtbra/t-shirtbra.component';

// routing of panties
import{ BikinisComponent } from './header/WOMENFILE/PANTIES/bikinis/bikinis.component';
import{ BoylegComponent } from './header/WOMENFILE/PANTIES/boyleg/boyleg.component';
import{ FullbriefComponent } from './header/WOMENFILE/PANTIES/fullbrief/fullbrief.component';
import{ HipstersComponent } from './header/WOMENFILE/PANTIES/hipsters/hipsters.component';
import{ ShortiesComponent } from './header/WOMENFILE/PANTIES/shorties/shorties.component';

//routing of innerwaretops
import{ CamisolesComponent } from './header/WOMENFILE/INNERWARETOPS/camisoles/camisoles.component';
import{ CroptropsComponent } from './header/WOMENFILE/INNERWARETOPS/croptrops/croptrops.component';
import{ KurtaslipsComponent } from './header/WOMENFILE/INNERWARETOPS/kurtaslips/kurtaslips.component';
import{ KurtislipsComponent } from './header/WOMENFILE/INNERWARETOPS/kurtislips/kurtislips.component';

//routing of apparelbottoms
import{ CaprisgirlComponent } from './header/WOMENFILE/APPARELBOTTOMS/caprisgirl/caprisgirl.component';
import{ LeggingsComponent } from './header/WOMENFILE/APPARELBOTTOMS/leggings/leggings.component';
import{ PantsComponent } from './header/WOMENFILE/APPARELBOTTOMS/pants/pants.component';
import{ ShortsgirlComponent } from './header/WOMENFILE/APPARELBOTTOMS/shortsgirl/shortsgirl.component';
import{ TrackpantsgirlComponent } from './header/WOMENFILE/APPARELBOTTOMS/trackpantsgirl/trackpantsgirl.component';

//routing of appareltops
import{ HoodiesgirlComponent } from './header/WOMENFILE/APPARELTOPS/hoodiesgirl/hoodiesgirl.component';
import{ SleepdressComponent } from './header/WOMENFILE/APPARELTOPS/sleepdress/sleepdress.component';
import{ TShirtgirlComponent } from './header/WOMENFILE/APPARELTOPS/t-shirtgirl/t-shirtgirl.component';
import{ TanktopsgirlComponent } from './header/WOMENFILE/APPARELTOPS/tanktopsgirl/tanktopsgirl.component';

//routing for kids part

//routing of apparel bottom boys
import{ JoggersboysComponent } from './header/KIDSFILE/APPARELBOTTOMS BOYS/joggersboys/joggersboys.component';
import{ ShortsboysComponent } from './header/KIDSFILE/APPARELBOTTOMS BOYS/shortsboys/shortsboys.component';

//routing of apparel bottom girls
import{ CaprisforgirlsComponent } from './header/KIDSFILE/APPARELBOTTOMS GIRLS/caprisforgirls/caprisforgirls.component';
import{ JoggerforgirlsComponent } from './header/KIDSFILE/APPARELBOTTOMS GIRLS/joggerforgirls/joggerforgirls.component';
import{ LeggingsforgirlsComponent } from './header/KIDSFILE/APPARELBOTTOMS GIRLS/leggingsforgirls/leggingsforgirls.component';
import{ ShortforgirlsComponent } from './header/KIDSFILE/APPARELBOTTOMS GIRLS/shortforgirls/shortforgirls.component';

//routing of apparel tops boys
import{ HoodiesboysComponent } from './header/KIDSFILE/APPARELTOPS BOYS/hoodiesboys/hoodiesboys.component';
import{ TShirtsboysComponent } from './header/KIDSFILE/APPARELTOPS BOYS/t-shirtsboys/t-shirtsboys.component';
import{ TanktopsboysComponent } from './header/KIDSFILE/APPARELTOPS BOYS/tanktopsboys/tanktopsboys.component';

//routing of apparel tops girls
import{ HoodiesforgirlsComponent } from './header/KIDSFILE/APPARELTOPS GIRLS/hoodiesforgirls/hoodiesforgirls.component';
import{ TShirtforgirlsComponent } from './header/KIDSFILE/APPARELTOPS GIRLS/t-shirtforgirls/t-shirtforgirls.component';
import{ TanktopsforgirlsComponent } from './header/KIDSFILE/APPARELTOPS GIRLS/tanktopsforgirls/tanktopsforgirls.component';

//routing of innerwear boys
import{ BoxershortsforboysComponent } from './header/KIDSFILE/INNERWEAR BOYS/boxershortsforboys/boxershortsforboys.component';
import{ BriefforboysComponent } from './header/KIDSFILE/INNERWEAR BOYS/briefforboys/briefforboys.component';
import{ TrunksforboysComponent } from './header/KIDSFILE/INNERWEAR BOYS/trunksforboys/trunksforboys.component';
import{ VestsforboysComponent } from './header/KIDSFILE/INNERWEAR BOYS/vestsforboys/vestsforboys.component';

//routinf of innerwear girls
import{ BloomersforgirlsComponent } from './header/KIDSFILE/INNERWEAR GIRLS/bloomersforgirls/bloomersforgirls.component';
import{ PantiesforgirlsComponent } from './header/KIDSFILE/INNERWEAR GIRLS/pantiesforgirls/pantiesforgirls.component';
import{ ShortiesforgirlsComponent } from './header/KIDSFILE/INNERWEAR GIRLS/shortiesforgirls/shortiesforgirls.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent},

  //routes for men part
  // routes of innerware
  { path: 'boxerbrief' , component:BoxerbriefComponent},
  { path: 'trunk' , component:TrunkComponent},
  { path: 'innerbrief' , component:InnerbriefComponent},
  { path: 'brief' , component:BriefComponent},

  //routes of appareltops
  { path: 'tanktop' , component:TanktopComponent},
  { path: 't-shirt' , component:TShirtComponent},
  { path: 'hoodie' , component:HoodieComponent},

  //routes of apparelbottom
  { path: 'bermudas' , component:BermudasComponent},
  { path: 'boxershot' , component:BoxershortComponent},
  { path: 'jogger' , component:JoggerComponent},
  { path: 'pyjama' , component:PyjamaComponent},
  { path: 'short' , component:ShortComponent},
  { path: 'trackpant' , component:TrackpantComponent},

  //routes of vest
  { path: 'sleeved' , component:SleevedComponent},
  { path: 'sleeveless' , component:SleevelessComponent},
  { path: 'gym' , component:GymComponent},
  
  //routes for women part

  //routes of bras
  { path: 'activebra' , component:ActivebraComponent},
  { path: 'everydaybra' , component:EverydaybraComponent},
  { path: 'plussizebra' , component:PlussizebraComponent},
  { path: 'sleepbra' , component:SleepbraComponent},
  { path: 't-shirtbra' , component:TShirtbraComponent},

  //routes of panties
  { path: 'bikinis' , component:BikinisComponent},
  { path: 'boyleg' , component:BoylegComponent},
  { path: 'fullbrief' , component:FullbriefComponent},
  { path: 'hipsters' , component:HipstersComponent},
  { path: 'shorties' , component:ShortiesComponent},

  //routes of innerwaretops
  { path: 'camisoles' , component:CamisolesComponent},
  { path: 'croptrops' , component:CroptropsComponent},
  { path: 'kurtaslips' , component:KurtaslipsComponent},
  { path: 'kurtislips' , component:KurtislipsComponent},

  //routes of apparelbottoms
  
  { path: 'caprisgirl' , component:CaprisgirlComponent},
  { path: 'leggings' , component:LeggingsComponent},
  { path: 'pants' , component:PantsComponent},
  { path: 'shortsgirl' , component:ShortsgirlComponent},
  { path: 'trackpantsgirl' , component:TrackpantsgirlComponent},

  //routes of appareltops
  { path: 'hoodiesgirls' , component:HoodiesgirlComponent},
  { path: 'sleepdress' , component:SleepdressComponent},
  { path: 't-shirtgirl' , component:TShirtgirlComponent},
  { path: 'tanktopsgirl' , component:TanktopsgirlComponent},

  //routes of apparel bottom boys
  { path: 'joggersboys' , component:JoggersboysComponent},
  { path: 'shortsboys' , component:ShortsboysComponent},

  //routes of apparel bottom girls
  { path: 'caprisforgirls' , component:CaprisforgirlsComponent},
  { path: 'joggerforgirls' , component:JoggerforgirlsComponent},
  { path: 'leggingsforgirls' , component:LeggingsforgirlsComponent},
  { path: 'shortforgirls' , component:ShortforgirlsComponent},

  //routes of apparel tops boys
  { path: 'hoodiesboys' , component:HoodiesboysComponent},
  { path: 't-shirtsboys' , component:TShirtsboysComponent},
  { path: 'tanktopsboys' , component:TanktopsboysComponent},

  //routes of apparel tops girls
  { path: 'hoodiesforgirls' , component:HoodiesforgirlsComponent},
  { path: 't-shirtforgirls' , component:TShirtforgirlsComponent},
  { path: 'tanktopsforgirls' , component:TanktopsforgirlsComponent},

  //routes of innerwear boys
  { path: 'boxershortsforboys' , component:BoxershortsforboysComponent},
  { path: 'briefforboys' , component:BriefforboysComponent},
  { path: 'trunksforboys' , component:TrunksforboysComponent},
  { path: 'vestsforboys' , component:VestsforboysComponent},

  //routes of innerwear girls
  { path: 'bloomersforgirls' , component:BloomersforgirlsComponent},
  { path: 'pantiesforgirls' , component:PantiesforgirlsComponent},
  { path: 'shortiesforgirls' , component:ShortiesforgirlsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
