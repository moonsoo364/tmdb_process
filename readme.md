# tmdb_process
tmdb open api로 mcu 영화 및 티비 시리즈 데이터를 조회하고 mongodb에 저장하기 위한 리포지토리

# 사용 라이브러리 
- axios : tmdb api를 호출하기 위해 사용
- mongodb : 조회한 데이터를 mongodb에 insert하기위한 드라이버
- express : rest api로 crud 작업 핸들링 하기위해 사용

# todo
## 250804 ~ 250808 
1. id가 몽고 DB 식별자인 _id로 저장되도록 변경
2. 장르 데이터 저장
3. tv show page 조회 api 생성, 전체 페이지를 순차적으로 조회하고 insert하는 비즈니스 로직 구현

