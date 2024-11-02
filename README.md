# My Portfolio
- 부트캠프를 수료하면서 새롭게 만든 프론트엔드 포트폴리오
- 배포 URL : https://frontend-portfolio-sage.vercel.app/

## 1. 개발 환경
- 버전 및 이슈관리 : 
    ### ![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)
- 서비스 배포 환경 : 
    ### ![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)

- 개발 도구 :
    ### ![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=Vite&logoColor=white)

- Front-end : 
    ### ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
    ### ![TypeScript](https://img.shields.io/badge/Typescript-3178C6?style=for-the-badge&logo=Typescript&logoColor=white)

## 2. 프로젝트 구조
```
📦src
 ┣ 📂assets
 ┃ ┣ 📂images
 ┃ ┃ ┣ 📂contact
 ┃ ┃ ┃ ┗ 📜contact_image.png
 ┃ ┃ ┗ 📂project
 ┃ ┃ ┃ ┣ 📜project-cms.jpg
 ┃ ┃ ┃ ┣ 📜project-gangwon.avif
 ┃ ┃ ┃ ┣ 📜project-openmarket.png
 ┃ ┃ ┃ ┣ 📜project-quotationEasy.avif
 ┃ ┃ ┃ ┗ 📜project-timeflow.png
 ┃ ┣ 📜profile_image.png
 ┃ ┣ 📜react.svg
 ┃ ┗ 📜visual_img.jpg
 ┣ 📂components
 ┃ ┣ 📂button
 ┃ ┃ ┣ 📜Button.tsx
 ┃ ┃ ┗ 📜LinkButton.tsx
 ┃ ┣ 📂footer
 ┃ ┃ ┗ 📜Footer.tsx
 ┃ ┣ 📂header
 ┃ ┃ ┗ 📜Header.tsx
 ┃ ┣ 📂inputs
 ┃ ┃ ┣ 📂labelInput
 ┃ ┃ ┃ ┗ 📜LabelInput.tsx
 ┃ ┃ ┗ 📜LabelLayout.tsx
 ┃ ┣ 📂layouts
 ┃ ┃ ┗ 📜RootLayout.tsx
 ┃ ┣ 📂navBar
 ┃ ┃ ┗ 📜NavBar.tsx
 ┃ ┣ 📂sections
 ┃ ┃ ┣ 📂about
 ┃ ┃ ┃ ┣ 📂career
 ┃ ┃ ┃ ┃ ┣ 📜Career.tsx
 ┃ ┃ ┃ ┃ ┗ 📜CareerListItem.tsx
 ┃ ┃ ┃ ┣ 📜About.tsx
 ┃ ┃ ┃ ┗ 📜Infomation.tsx
 ┃ ┃ ┣ 📂contact
 ┃ ┃ ┃ ┣ 📜contact.module.css
 ┃ ┃ ┃ ┗ 📜Contact.tsx
 ┃ ┃ ┣ 📂projects
 ┃ ┃ ┃ ┣ 📜ProjectItem.tsx
 ┃ ┃ ┃ ┣ 📜projects.module.css
 ┃ ┃ ┃ ┗ 📜Projects.tsx
 ┃ ┃ ┣ 📂skills
 ┃ ┃ ┃ ┣ 📜SkillItem.tsx
 ┃ ┃ ┃ ┣ 📜skills.module.css
 ┃ ┃ ┃ ┗ 📜Skills.tsx
 ┃ ┃ ┣ 📂visual
 ┃ ┃ ┃ ┣ 📜visual.module.css
 ┃ ┃ ┃ ┗ 📜Visual.tsx
 ┃ ┃ ┗ 📜SectionWrap.tsx
 ┃ ┣ 📂title
 ┃ ┃ ┣ 📜title.module.css
 ┃ ┃ ┗ 📜Title.tsx
 ┃ ┗ 📂tooltip
 ┃ ┃ ┗ 📜ErrorToolTip.tsx
 ┣ 📂hooks
 ┃ ┣ 📜usePositionPositionCalculate.ts
 ┃ ┗ 📜useScrollPosition.ts
 ┣ 📂pages
 ┃ ┗ 📂main
 ┃ ┃ ┗ 📜Main.tsx
 ┣ 📂store
 ┃ ┗ 📜useSectionPositionStore.ts
 ┣ 📂types
 ┃ ┣ 📂enum
 ┃ ┃ ┗ 📜ButtonEnum.ts
 ┃ ┗ 📜index.ts
 ┣ 📂utils
 ┃ ┗ 📜http.ts
 ┣ 📜App.css
 ┣ 📜App.tsx
 ┣ 📜index.css
 ┣ 📜main.tsx
 ┗ 📜vite-env.d.ts
 ```

 ## 3. 개발 기간
 - 전체 개발 기간: 2024-10-06 ~ 2024-10-31