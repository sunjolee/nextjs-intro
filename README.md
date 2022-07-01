# Next JS Introduction

## 강의
https://nomadcoders.co/nextjs-fundamentals/lectures/3436

---
## 0 Introduction

## 0.1 Requirements

---

## 0.2 Creating a Project

* 프로젝트 생성

  npx create-next-app@latest
    ![img_1.png](img_1.png)
   

* 프로젝트 실행
  npm run dev  
  ![img_2.png](img_2.png) 

  http://localhost:3000
  ![img_3.png](img_3.png) 

---

# 1. Framework Overview

## 1.0 Library vs Framework


![img_4.png](img_4.png) 

  * 라이브러리 
    
    개발자가 어떤 프로그램을 가져다 쓰는것 (Ex React: 렌더링할때 ReactDOM.render()를 불러와서 사용한다.)
    

  * 프레임워크
    
    개발자의 코드를 프로그램이 불러오는 것 (Ex NextJS: 정해진 규칙에 따라 코드를 작성하면 렌더링된다. )

---

    ### 라이브러리와 프레임워크의 주요 차이점

    라이브러리와 프레임워크의 주요 차이점은 "Inversion of Control"(통제의 역전)입니다.
    라이브러리에서 메서드를 호출하면 사용자가 제어할 수 있습니다.
    그러나 프레임워크에서는 제어가 역전되어 프레임워크가 사용자를 호출합니다.

* 라이브러리

    사용자가 파일 이름이나 구조 등을 정하고, 모든 결정을 내림

* 프레임워크

    파일 이름이나 구조 등을 정해진 규칙에 따라 만들고 따름
  
# 1.1 Pages

    pages 폴더 안에 있는 파일명에 따라 route가 결정된다.
    pages/about.js 생성 ->
    localhost:3000/about (O)
    localhost:3000/about-us(X)
    
    다만 예외사항으로, index.js의 경우에는
    앱이 시작하는 파일이라고 보면 된다.
    즉 localhost:3000 그 자체다 뒤에 /index 로 붙이면 안된다.
    
    이 강의를 들을 때는 import react from "react"를 쓸 필요가 없다.
    다만 useState,useEffect, lifecycle method 같은 애들을 써야 할 경우에는 꼭 import를 해줘야 한다.

# 1.2 Static Pre Rendering

    CSR(Client Side Rendering)테스트 해보시려면
    아래 사이트에서 개발자 도구 -> Network -> Slow 3G로 바꾸시고, Disable cache를 클릭해주시고 새로고침하시면 테스트해볼 수 있습니다.
    https://nomadcoders.github.io/react-masterclass/
    
    자바스크립트 비활성화하기
    보안 및 개인정보 보호-사이트 및 방패 설정-자바스크립트-자바스크립트 비활성화

* 크롬 개발자 도구에서 설정 버튼 클릭 (https://billnote.net/699)
    ![img_6.png](img_6.png)
    * Debugger : Disable JavaScript 체크
    ![img_5.png](img_5.png)
      
# 1.3 Routing

![img_8.png](img_8.png)

![img_7.png](img_7.png)

![img_9.png](img_9.png)

![img_10.png](img_10.png)

    No HTML link for pages
    
    페이지 간 클라이언트 측 경로 전환을 활성화하고 single-page app 경험을 제공하려면 Link컴포넌트가 필요합니다.
    ```
    // 변경 전
    < a href="/about">About Us< /a>
    
    // 변경 후
    import Link from 'next/link'
    
    < Link href="/about">
    < a>About Us< /a>
    < /Link>
    ```
    https://nextjs.org/docs/messages/no-html-link-for-pages
    
    useRouter()
    앱의 함수 컴포넌트에서 router객체 내부에 접근하려면 userRouter()훅을 사용할 수 있습니다.
    useRouter는 React Hook입니다. 즉, 클래스와 함께 사용할 수 없습니다. withRouter를 사용하거나 클래스를 함수 컴포넌트로 래핑할 수 있습니다.
    ```
    const router = useRouter()
    ```
    https://nextjs.org/docs/api-reference/next/router#userouter

# 1.4 CSS Modules

![img_11.png](img_11.png)

![img_12.png](img_12.png)

![img_14.png](img_14.png)
 
![img_15.png](img_15.png)
    
    Array.prototype.join()
    join() 메서드는 배열의 모든 요소를 연결해 하나의 문자열로 만듭니다.
    const elements = ['Fire', 'Air', 'Water'];
    console.log(elements.join()); // expected output: "Fire,Air,Water"
    console.log(elements.join('-')); // expected output: "Fire-Air-Water"
    https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/join
    
    CSS Module 사용하기
    1. className={`${styles.link} ${router.pathname === "/" ? styles.active : ""}`}
    2. [styles.link, router.pathname === "/" ? styles.active : ""].join(" ")