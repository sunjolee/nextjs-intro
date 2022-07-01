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
  