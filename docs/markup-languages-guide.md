# 📚 마크업 언어 완벽 가이드

## 🌐 마크업 언어 (Markup Language)
- **정의**: 텍스트에 구조와 의미를 부여하는 언어들의 총칭
- **목적**: 문서의 구조화, 서식 지정, 데이터 표현
- **예시**: HTML, XML, Markdown, LaTeX, SGML

---

## 📝 마크다운 (Markdown)
### 기본 정보
- **원어**: Markdown
- **약어**: md
- **확장자**: `.md`, `.markdown`
- **특징**: 쉽고 간단하게 문서를 꾸밀 수 있는 경량 마크업 언어

### 주요 용도
- README 파일 작성
- 블로그 포스팅
- 기술 문서화
- GitHub/GitLab 문서
- 노트 앱 (Obsidian, Notion)

### 기본 문법
```markdown
# 제목 1
## 제목 2
### 제목 3

**굵은 글씨**
*기울임*
~~취소선~~

- 목록 1
- 목록 2
  - 하위 목록

1. 순서 목록
2. 순서 목록

[링크](https://example.com)
![이미지](image.jpg)

`인라인 코드`

\```javascript
코드 블록
\```

> 인용문

---
구분선
```

### 장점
- ✅ 배우기 쉬움
- ✅ 가독성 좋음
- ✅ 버전 관리 용이
- ✅ 다양한 플랫폼 지원

---

## 🌍 HTML (HyperText Markup Language)
### 기본 정보
- **원어**: HyperText Markup Language
- **약어**: HTML
- **버전**: HTML5 (최신)
- **특징**: 웹페이지를 구성하는 표준 마크업 언어

### 주요 용도
- 웹페이지 구조 정의
- 콘텐츠 의미 부여
- 멀티미디어 삽입
- 폼 구성

### 기본 구조
```html
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>제목</title>
</head>
<body>
    <h1>제목</h1>
    <p>단락</p>
    <a href="#">링크</a>
    <img src="image.jpg" alt="설명">
    <ul>
        <li>목록</li>
    </ul>
</body>
</html>
```

### 특징
- 🏷️ 정해진 태그만 사용
- 🌐 웹브라우저에서 바로 표시
- 🎨 CSS와 연동하여 스타일링
- ⚡ JavaScript로 동적 기능 추가

---

## 📦 XML (eXtensible Markup Language)
### 기본 정보
- **원어**: eXtensible Markup Language
- **약어**: XML
- **표준**: W3C 권고안
- **특징**: 사용자가 태그를 정의할 수 있는 확장 가능한 마크업 언어

### 주요 용도
- 데이터 교환
- 설정 파일
- API 응답
- 문서 구조화
- RSS/Atom 피드

### 기본 구조
```xml
<?xml version="1.0" encoding="UTF-8"?>
<root>
    <person id="1">
        <name>홍길동</name>
        <age>30</age>
        <email>hong@example.com</email>
    </person>
    <person id="2">
        <name>김철수</name>
        <age>25</age>
        <email>kim@example.com</email>
    </person>
</root>
```

### 특징
- 🔧 사용자 정의 태그
- 📏 엄격한 문법 규칙
- 🔍 검증 가능 (DTD, XSD)
- 🌳 계층적 구조
- 🔄 플랫폼 독립적

### XML vs HTML
| 구분 | XML | HTML |
|------|-----|------|
| 목적 | 데이터 저장/전송 | 데이터 표시 |
| 태그 | 사용자 정의 | 미리 정의 |
| 대소문자 | 구분함 | 구분 안함 |
| 닫는 태그 | 필수 | 선택적 |

---

## 📊 JSON (JavaScript Object Notation)
### 기본 정보
- **원어**: JavaScript Object Notation
- **약어**: JSON
- **MIME Type**: `application/json`
- **특징**: 마크업 언어는 아니지만 구조화된 데이터 표현 포맷

### 주요 용도
- REST API 응답
- 설정 파일
- 데이터 저장
- 서버-클라이언트 통신
- NoSQL 데이터베이스

### 기본 구조
```json
{
  "name": "홍길동",
  "age": 30,
  "email": "hong@example.com",
  "skills": ["JavaScript", "Python", "SQL"],
  "address": {
    "city": "서울",
    "zipcode": "12345"
  },
  "isActive": true
}
```

### 데이터 타입
- 문자열: `"text"`
- 숫자: `123`, `3.14`
- 불린: `true`, `false`
- null: `null`
- 객체: `{}`
- 배열: `[]`

### 장점
- ✅ 간단하고 가벼움
- ✅ 사람이 읽기 쉬움
- ✅ 대부분 언어 지원
- ✅ JavaScript와 완벽 호환

---

## 🔄 비교표

| 특성 | Markdown | HTML | XML | JSON |
|------|----------|------|-----|------|
| **목적** | 문서 작성 | 웹 표시 | 데이터 구조화 | 데이터 교환 |
| **복잡도** | 낮음 | 중간 | 높음 | 낮음 |
| **가독성** | 매우 좋음 | 보통 | 보통 | 좋음 |
| **확장성** | 제한적 | 제한적 | 매우 높음 | 중간 |
| **용량** | 작음 | 중간 | 큼 | 작음 |
| **검증** | 없음 | DTD | DTD/XSD | Schema |
| **주석** | `<!-- -->` | `<!-- -->` | `<!-- -->` | 불가 |

---

## 💡 선택 가이드

### 📝 Markdown을 선택하세요
- README 파일 작성
- 블로그 포스팅
- 기술 문서
- 노트 작성

### 🌐 HTML을 선택하세요
- 웹페이지 제작
- 이메일 템플릿
- 웹 애플리케이션 UI

### 📦 XML을 선택하세요
- 복잡한 데이터 구조
- 설정 파일
- 문서 검증 필요
- SOAP API

### 📊 JSON을 선택하세요
- REST API
- 간단한 설정 파일
- JavaScript 프로젝트
- NoSQL 데이터

---

## 🛠️ 변환 도구

### Markdown → HTML
```javascript
// marked.js 사용
const marked = require('marked');
const html = marked.parse('# 제목\n**굵은 글씨**');
```

### XML → JSON
```javascript
// xml2js 사용
const xml2js = require('xml2js');
const parser = new xml2js.Parser();
parser.parseString(xmlData, (err, result) => {
    console.log(JSON.stringify(result));
});
```

### JSON → XML
```javascript
// js2xmlparser 사용
const js2xmlparser = require('js2xmlparser');
const xml = js2xmlparser.parse("person", jsonData);
```

---

## 📚 참고 자료

### 공식 문서
- [Markdown Guide](https://www.markdownguide.org/)
- [HTML MDN](https://developer.mozilla.org/ko/docs/Web/HTML)
- [XML W3C](https://www.w3.org/XML/)
- [JSON.org](https://www.json.org/)

### 온라인 도구
- [Markdown Editor](https://stackedit.io/)
- [HTML Validator](https://validator.w3.org/)
- [XML Validator](https://www.xmlvalidation.com/)
- [JSON Formatter](https://jsonformatter.org/)

---

## 🎯 요약

> 각각의 언어/포맷은 목적에 따라 선택해 사용하면 됩니다.
> - **웹 표현**: HTML
> - **데이터 전달/저장**: XML, JSON
> - **손쉬운 문서 작성**: Markdown
> - **마크업 언어**는 이 모든 요소의 근간!

---

*작성일: 2025-08-23*  
*작성자: Claude Code with MadKangYu*