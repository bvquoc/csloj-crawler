**<center>Nguồn: Bài tập thầy Nguyễn Thanh Bình ôn Hải phòng - Ngày 10 tháng 11 năm 2020 (am)</center>**

Cho số nguyên dương ~x~. Hàm ~f(x)~ được xây dựng bằng cách như sau: Trước tiên lấy tổng các chữ số của ~x~ được số nguyên ~x_1~; nếu ~x_1>9~ thì lấy tổng các chữ số của ~x_1~ được số nguyên ~x_2~;... Quá trình này tiếp tục đến khi thu được một số nhỏ hơn hoặc bằng ~9~. Ví dụ nếu ~x=197~ thì ~x_1=1+9+7=17; x_2=1+7=8~ và ta được ~f(x)=8~.

**Yêu cầu:** Cho hai số nguyên dương ~L,R~ hãy tính tổng ~f(L)+f(L+1)+⋯+f(R)~.

## Dữ liệu vào:
- Dòng đầu tiên chứa số nguyên dương ~Q\ (Q≤100)~ là số lượng truy vấn;
- ~Q~ dòng tiếp theo, dòng thứ ~i~ chứa hai số nguyên dương ~L_i,R_i\ (1≤L_i≤R_i≤2^{60})~ thể hiện một truy vấn.

## Dữ liệu ra:
- Với truy vấn ~L_i,R_i~ in ra ~f(L_i )+⋯+f(R_i)~.

## Giới hạn:
- Subtask ~\#1: 1≤L_i≤R_i≤9~;
- Subtask ~\#2: R_i-L_i≤1000~;
- Subtask ~\#3:~ Không có ràng buộc bổ sung.

## Ví dụ:
#### Dữ liệu vào:
```
2
9 13
44 45
```

#### Dữ liệu ra:
```
19
17
```
**Nguồn:** [Chuyên Sơn La Online Judge](http://csloj.ddns.net/)

**Group giải đáp thắc mắc:** [Lập trình 24h](https://www.facebook.com/groups/1386904321519984)