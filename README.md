# visitor-access-site

사내 방문객 출입 관리용 웹 애플리케이션 프로젝트입니다.

## GitHub 저장소 연결

1. GitHub에서 빈 저장소를 만듭니다 (예: `visitor-access`).
2. 아래 명령에서 URL을 본인 조직·계정에 맞게 바꿉니다.

```bash
cd /Users/kangdain/Desktop/cursor/visitor-access-site
git remote add origin https://github.com/<계정또는조직>/visitor-access.git
git branch -M main
git push -u origin main
```

이미 원격이 있다면:

```bash
git remote set-url origin https://github.com/<계정또는조직>/visitor-access.git
```

SSH를 쓰는 경우:

```bash
git remote add origin git@github.com:<계정또는조직>/visitor-access.git
```

## 로컬에서 미리보기

정적 프로토타입은 브라우저에서 `index.html`을 열거나, 간단한 서버로 실행할 수 있습니다.

```bash
cd /Users/kangdain/Desktop/cursor/visitor-access-site
python3 -m http.server 8080
```

브라우저에서 `http://localhost:8080` 접속.

## GitHub Pages (공개 미리보기)

**URL:** https://dain-spec.github.io/visitor-access/

`main` 브랜치에 푸시하면 GitHub Actions(`.github/workflows/pages.yml`)가 정적 사이트를 배포합니다.

### 최초 1회 설정 (저장소 관리자)

GitHub에서 Pages를 켜야 배포가 동작합니다.

1. [저장소 Settings → Pages](https://github.com/dain-spec/visitor-access/settings/pages) 이동
2. **Build and deployment → Source**를 **GitHub Actions**로 선택
3. [Actions](https://github.com/dain-spec/visitor-access/actions) 탭에서 실패한 **Deploy to GitHub Pages** 워크플로를 **Re-run all jobs**로 다시 실행

배포가 성공하면 위 URL에서 사이트를 볼 수 있습니다(보통 1~2분 소요).

## 다음 단계 (제안)

- 방문 예약·체크인 API 및 DB (예: PostgreSQL, Supabase)
- 사내 SSO (SAML/OIDC) 연동
- 호스트 알림·출입증·방문 이력 감사 로그

원하시는 GitHub 저장소 전체 URL(HTTPS 또는 SSH)을 알려주시면, 그 주소에 맞춰 `origin` 설정까지 구체적으로 적어 드리겠습니다.
