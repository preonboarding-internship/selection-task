# 원티드 프리온보딩 프론트엔드 - 선발 과제

이 레파지토리는 원티드 프리온보딩 프론트엔드 과정 선발 과제 안내 및 과제 간 사용하기 위한 API를 제공하기 위해 만들어졌습니다.

## 안내 사항

- 본 과제는 프리온보딩 프론트엔드 코스 선발 과정에서 최소한의 수준을 파악하기 위한 용도입니다.
- 기능의 정상 동작 여부, 작성된 코드의 퀄리티, Git 관리 수준 등을 기준으로 평가가 이루어집니다.
- 이 레파지토리에서 제공된 API를 활용해서 선발 과제를 진행하게 됩니다.
- API의 실행 및 사용법은 [API](#api) 챕터를 참고해주세요
- 과제의 소스코드는 본인의 GitHub 레파지토리에 **Public**으로 올려주세요
- 레파지토리 이름은 `wanted-pre-onboarding-frontend`로 생성해주세요
- 과제 제출은 참가 신청시 수행한 과제의 레파지토리의 주소를 제출해주세요

### 주의 사항

- **제출한 링크가 잘못되었거나, 링크를 통해서 레파지토리에 접근할 수 없는 경우 탈락처리됩니다.**
- **가이드를 준수하지 않은 경우 탈락처리됩니다.**

- 레파지토리를 들어갔을 때 바로 소스코드가 보이도록 해주세요, 불필요한 depth가 존재하면 안됩니다.

  - [올바른 예시](https://github.com/walking-sunset/right-example)
  - [불필요한 depth가 존재하는 예시](https://github.com/walking-sunset/wrong-example)

- 레파지토리 안의 특정 폴더의 링크가 아닌 레파지토리의 링크를 제출해주세요

  - 올바른 예시: [https://github.com/walking-sunset/right-example](https://github.com/walking-sunset/right-example)
  - 특정 폴더의 링크를 제출한 예시: [https://github.com/walking-sunset/right-example/tree/master/src](https://github.com/walking-sunset/right-example/tree/master/src)

- 제출시기 가산점은 모집 페이지에서 제출한 시기와, 레파지토리의 default branch의 최종 커밋 시기를 기반으로 결정됩니다.
  - 과제 제출 후에는 코드 변경을 지양해주시고, 평가와 무관하게 수정을 하고 싶을 경우 default branch(master or main)가 아닌 별도의 브랜치에서 작업해주세요

## 진행 가이드

- **진행 간 문의사항은 이 레파지토리의 Issue로 등록해주세요**

- Create React App을 이용해 과제를 구현해주세요
  - 환경설정의 일관성을 위해 Create React App외의 다른 툴체인 사용은 허용하지 않습니다(Vite, Next.js 등)
- git clone 후, `npm install & npm start` 명령어를 통해서 바로 정상동작이 가능하게 해주세요
  - clone 후, 별도의 파일을 생성하거나 환경변수를 수동으로 설정하는 등 추가적인 과정 없이 바로 실행이 가능하도록 해주세요
- 함수 컴포넌트를 이용해서 진행해주세요
- UI는 지원자 개인이 생각했을 때 자연스러운 형태로 구현해주세요, UI는 평가에 영향을 미치지 않습니다.
- README.md 작성은 필수입니다. 아래의 사항은 반드시 포함되도록 해주세요
  - 프로젝트의 실행 방법
  - 데모 영상
  - 데모 영상은 배포 링크로 대체 가능하며, 배포가 되었고 배포된 사이트에서 기능이 모두 동작하면 가산점이 부여됩니다.
  - 배포된 사이트에서 기능이 정상동작 하지 않는다면 배포 가산점이 부여되지 않습니다
    - 기능이 정상 동작하지 않는 예시:
      - 새로고침하면 404 에러 페이지 표출
      - "/" URL이 아닌 "/signup"등의 경로로 바로 접속할 경우 404 에러 페이지 표출 등
- 기능구현에 직접적으로 연관된 라이브러리 사용은 허용되지 않습니다.(React-Query 등)
- 사용가능한 라이브러리 목록은 아래와 같습니다.
  - React Router
  - HTTP Client 라이브러리(Axios 등)
  - 스타일링 관련 라이브러리(Sass, Styled Components, Emotion, tailwind 등)
  - 아이콘 등 UI 관련 라이브러리(Font-Awesome, React-Icons, Bootstrap 등)
  - 기능과 직접적인 연관이 없는 설정관련 라이브러리(craco, dotenv 등)

## 과제

- 과제 수행 과정에서 지원자분들의 자율성과 창의력을 발휘하는 것을 기대하고 존중합니다. 다만, 아래 과제 안내에 적힌 가이드라인들은 모두 정확히 준수해주시기를 바랍니다.
- 가이드라인에 명시된 `test-id` 속성이 제대로 부여되지 않은 경우 구현이 안된 것으로 판단됩니다.
- 가이드라인에 명시된 사항 외에는 자유롭게 진행해주셔도 됩니다.

### :: 1. 로그인 / 회원가입

- `/signup` 경로에 회원가입 기능을 개발해주세요
- `/signin` 경로에 로그인 기능을 개발해주세요

  - 페이지 안에 이메일 input, 비밀번호 input, 제출 button이 포함된 형태로 구성해주세요

    - 이메일 input에 `data-testid="email-input"` 속성을 부여해주세요
    - 패스워드 input에 `data-testid="password-input"` 속성을 부여해주세요
    - 회원가입 button에 `data-testid="signup-button"` 속성을 부여해주세요
    - 로그인 button에 `data-testid="signin-button"` 속성을 부여해주세요

    ```html
    <!-- 예시 -->
    <input data-testid="email-input" />
    <input data-testid="password-input" />
    <button data-testid="signup-button">회원가입</button>
    ```

- 두 페이지의 UI는 동일해도 무방합니다.
- 회원가입과 로그인 페이지의 버튼에 부여되는 test-id가 다른 것에 유의해주세요

#### Assignment 1

- 회원가입과 로그인 페이지에 이메일과 비밀번호의 유효성 검사기능을 구현해주세요

  - 이메일 조건: `@` 포함
  - 비밀번호 조건: 8자 이상
  - 이메일과 비밀번호의 유효성 검사 조건은 별도의 추가 조건 부여 없이 위의 조건대로만 진행해주세요 (e.g. 비밀번호 유효성 검사에 특수문자 포함 등의 새로운 조건을 추가하는 행위, 비밀번호 확인 조건을 추가하는 행위 등은 지양해주세요)

- 입력된 이메일과 비밀번호가 유효성 검사를 통과하지 못한다면 button에 `disabled` 속성을 부여해주세요
- 보안 상 실제 사용하고 계신 이메일과 패스워드말고 테스트용 이메일, 패스워드 사용을 권장드립니다.

#### Assignment 2

- 회원가입 페이지에서 버튼을 클릭 시 회원가입을 진행하고 회원가입이 정상적으로 완료되었을 시 `/signin` 경로로 이동해주세요

#### Assignment 3

- 로그인 페이지에서 버튼을 클릭 시, 로그인을 진행하고 로그인이 정상적으로 완료되었을 시 `/todo` 경로로 이동해주세요

  - 로그인 API는 로그인이 성공했을 시 Response Body에 JWT를 포함해서 응답합니다.
  - 응답받은 JWT는 로컬 스토리지에 저장해주세요

#### Assignment 4

- 로그인 여부에 따른 리다이렉트 처리를 구현해주세요

  - 로컬 스토리지에 토큰이 있는 상태로 `/signin` 또는 `/signup` 페이지에 접속한다면 `/todo` 경로로 리다이렉트 시켜주세요
  - 로컬 스토리지에 토큰이 없는 상태로 `/todo`페이지에 접속한다면 `/signin` 경로로 리다이렉트 시켜주세요

---

### :: 2. TODO LIST

#### Assignment 5

- `/todo`경로에 접속하면 투두 리스트의 목록을 볼 수 있도록 해주세요
- 목록에서는 TODO의 내용과 완료 여부가 표시되어야 합니다.
- TODO의 완료 여부는 `<input type="checkbox" />`를 통해 표현해주세요
- TODO는 `<li>` tag를 이용해 감싸주세요

```html
<li>
  <label>
    <input type="checkbox" />
    <span>TODO 1</span>
  </label>
</li>
<li>
  <label>
    <input type="checkbox" />
    <span>TODO 2</span>
  </label>
</li>
```

#### Assignment 6

- 리스트 페이지에 새로운 TODO를 입력할 수 있는 input과 추가 button을 만들어주세요

  - TODO 입력 input에는 `data-testid="new-todo-input"` 속성을 부여해주세요
  - TODO 추가 button에는 `data-testid="new-todo-add-button"` 속성을 부여해주세요

    ```html
    <input data-testid="new-todo-input" />
    <button data-testid="new-todo-add-button">추가</button>
    ```

- 추가 button을 클릭하면 입력 input의 내용이 새로운 TODO로 추가되도록 해주세요
- TODO를 추가 한 뒤 새로고침을 해도 추가한 TODO가 목록에 보여야 합니다.

#### Assignment 7

- TODO의 체크박스를 통해 완료 여부를 수정할 수 있도록 해주세요.

#### Assignment 8

- TODO 우측에 수정버튼과 삭제 버튼을 만들어주세요

  - 수정 버튼에는 `data-testid="modify-button"` 속성을 부여해주세요
  - 삭제 버튼에는 `data-testid="delete-button"` 속성을 부여해주세요

    ```html
    <li>
      <label>
        <input type="checkbox" />
        <span>TODO 1</span>
      </label>
      <button data-testid="modify-button">수정</button>
      <button data-testid="delete-button">삭제</button>
    </li>
    ```

#### Assignment 9

- 투두 리스트의 삭제 기능을 구현해주세요

  - 투두 리스트의 TODO 우측의 삭제버튼을 누르면 해당 아이템이 삭제되도록 해주세요

#### Assignment 10

- 투두 리스트의 수정 기능을 구현해주세요

  - TODO 우측의 수정 버튼을 누르면 수정모드가 활성화 되도록 해주세요
  - 수정모드에서는 TODO의 내용을 변경할 수 있어야 합니다.
  - 수정모드에서는 TODO의 내용이 input창 안에 입력된 형태로 변경해주세요
    - 수정 input창에는 `data-testid="modify-input"` 속성을 부여해주세요
  - 수정모드에서는 TODO의 우측에 제출버튼과 취소버튼이 표시되게 해주세요
    - 제출버튼에는 `data-testid="submit-button"` 속성을 부여해주세요
    - 취소버튼에는 `data-testid="cancel-button"` 속성을 부여해주세요
  - 제출버튼을 누르면 수정한 내용을 제출해서 내용이 업데이트 될 수 있도록 해주세요
  - 취소버튼을 누르면 수정한 내용을 초기화 하고, 수정모드를 비활성화 해주세요

    ```html
    <input data-testid="modify-input" />
    <button data-testid="submit-button">제출</button>
    <button data-testid="cancel-button">취소</button>
    ```

#### 예시

![example](https://user-images.githubusercontent.com/110355087/214471527-bd8037b9-f2dd-4db0-ade0-3d5ce27a6c0c.gif)

# API

- API 주소: [https://www.pre-onboarding-selection-task.shop/](https://www.pre-onboarding-selection-task.shop)

## 스펙

## 1) Auth

---

## 1-1) SignUp

### 요청

- URL: `/auth/signup`
- Method: `POST`
- Headers:
  - Content-Type: `application/json`
- Body:
  - email: string
  - password: string

### 응답 예시

- status: 201 Created
- body: 없음

## 1-2) SignIn

### 요청

- URL: `/auth/signin`
- Method: `POST`
- Headers:
  - Content-Type: `application/json`
- Body:
  - email: string
  - password: string

### 응답 예시

- status: 200 OK
- body
  ```json
  {
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RAZ21haWwuY29tIiwic3ViIjo0LCJpYXQiOjE2NTk5MDQyMTUsImV4cCI6MTY2MDUwOTAxNX0.DyUCCsIGxIl8i_sGFCa3uQcyEDb9dChjbl40h3JWJNc"
  }
  ```

## 2) Todo

## 2-1) createTodo

### 요청

- URL: `/todos`
- Method: `POST`
- Headers:
  - Authorization: `Bearer access_token`
  - Content-Type: `application/json`
- Body:
  - todo: string

### 응답 예시

- status: 201 Created
- body
  ```json
  {
    "id": 1,
    "todo": "과제하기",
    "isCompleted": false,
    "userId": 1
  }
  ```

## 2-2) getTodos

### 요청

- URL: `/todos`
- Method: `GET`
- Headers:
  - Authorization: `Bearer access_token`

### 응답 예시

- status: 200 OK
- body
  ```json
  [
    {
      "id": 1,
      "todo": "todo2",
      "isCompleted": false,
      "userId": 1
    },
    {
      "id": 2,
      "todo": "todo3",
      "isCompleted": false,
      "userId": 1
    }
  ]
  ```

## 2-3) updateTodo

### 요청

- URL: `/todos/:id`
- Method: `PUT`
- Headers:
  - Authorization: `Bearer access_token`
  - Content-Type: `application/json`
- Body:
  - todo: string
  - isCompleted: boolean
  
### 요청 예시

- URL: `/todos/1`
- body
  ```json
  {
    "todo": "Hello World",
    "isCompleted": true,
  }
  ```

### 응답 예시

- status: 200 OK
- body
  ```json
  {
    "id": 1,
    "todo": "Hello World",
    "isCompleted": true,
    "userId": 2
  }
  ```

## 2-4) deleteTodo

### 요청

- URL: `/todos/:id`
- Method: `DELETE`
- Headers:
  - Authorization: `Bearer access_token`
  
### 요청 예시

- URL: `/todos/1`
- body: 없음


### 응답 예시

- status: 204 No Content
- body: 없음

## 로컬 서버 구동

- 배포된 API에 문제가 있는 경우 활용할 수 있는 로컬 서버 구동법입니다.
- 로컬 서버는 sqlite에 의존성이 있습니다.

### 설치 및 실행

```zsh
$ npm install
$ npm start
```

- 위 순서대로 실행하면 localhost:8000 포트에 서버가 실행됩니다.
- 서버를 실행하면 db.sqlite 파일이 생성되며 해당 파일을 삭제 시 기존의 데이터는 초기화 됩니다.
- 그 외 스펙은 배포된 API와 동일합니다.
