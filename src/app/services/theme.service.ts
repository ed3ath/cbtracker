import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Injectable, OnDestroy, PLATFORM_ID, RendererFactory2, inject } from '@angular/core';
import { ReplaySubject, Subject, takeUntil } from 'rxjs';

import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class ThemeService implements OnDestroy {
  private _platformId = inject(PLATFORM_ID);
  private _renderer = inject(RendererFactory2).createRenderer(null, null);
  private _document = inject(DOCUMENT);

  private _theme$ = new ReplaySubject<'light' | 'dark'>(1);
  public theme$ = this._theme$.asObservable();
  private _destroyed$ = new Subject<void>();

  constructor(private configService: ConfigService) {
    this.syncThemeFromLocalStorage();
    this.toggleClassOnThemeChanges();
  }

  private syncThemeFromLocalStorage(): void {
    if (isPlatformBrowser(this._platformId)) {
      this._theme$.next(
        this.configService.getTheme() === 'dark' ? 'dark' : 'light'
      );
    }
  }
  private toggleClassOnThemeChanges(): void {
    this.theme$.pipe(takeUntil(this._destroyed$)).subscribe((theme) => {
      if (theme === 'dark') {
        this._renderer.addClass(this._document.documentElement, 'dark');
      } else {
        if (this._document.documentElement.className.includes('dark')) {
          this._renderer.removeClass(this._document.documentElement, 'dark');
        }
      }
    });
  }

  public toggleDarkMode(): void {
    const newTheme = this.configService.theme === 'dark' ? 'light' : 'dark';
    this.configService.theme = newTheme
    this.configService.saveTheme()
    this._theme$.next(newTheme);
  }

  public ngOnDestroy(): void {
    this._destroyed$.next();
    this._destroyed$.complete();
  }
}
