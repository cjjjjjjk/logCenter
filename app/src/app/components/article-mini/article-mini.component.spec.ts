import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleMiniComponent } from './article-mini.component';

describe('ArticleMiniComponent', () => {
  let component: ArticleMiniComponent;
  let fixture: ComponentFixture<ArticleMiniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArticleMiniComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticleMiniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
