import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { LancamentoPage } from './lancamento.page';

describe('LancamentoPage', () => {
  let component: LancamentoPage;
  let fixture: ComponentFixture<LancamentoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LancamentoPage ],
      imports: [IonicModule.forRoot(), RouterModule.forRoot([])]
    }).compileComponents();

    fixture = TestBed.createComponent(LancamentoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
