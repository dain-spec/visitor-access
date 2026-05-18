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

`main` 브랜치에 푸시하면 GitHub Actions가 정적 사이트를 배포합니다.

**URL:** https://dain-spec.github.io/visitor-access/

처음 설정 직후에는 배포에 1~2분 걸릴 수 있습니다. 저장소 **Settings → Pages**에서 Source가 **GitHub Actions**인지 확인하세요.

## 다음 단계 (제안)

- 방문 예약·체크인 API 및 DB (예: PostgreSQL, Supabase)
- 사내 SSO (SAML/OIDC) 연동
- 호스트 알림·출입증·방문 이력 감사 로그

원하시는 GitHub 저장소 전체 URL(HTTPS 또는 SSH)을 알려주시면, 그 주소에 맞춰 `origin` 설정까지 구체적으로 적어 드리겠습니다.
