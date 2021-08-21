**<center>NGUỒN: BÀI TẬP THẦY HIẾU HƯNG YÊN ÔN TẠI HƯNG YÊN NGÀY 13/11/2019</center>**
<br>

Một hang động nằm dưới một núi đá, nối giữa ~2~ thung lũng có điểm cao nhất với độ cao ~n~ có cấu trúc không bằng phẳng có thể chia thành ~m~ đoạn độ dài như nhau. Phía trên đoạn thứ ~i\ (1≤i≤m)~ là nhũ đá độ dài ~a_i~ (tính từ điểm cao nhất của hang động). Phía dưới có những cấu trúc đá lồi lõm, ở đoạn thứ ~i\ (1≤i≤m)~ có độ cao ~b_i~. Người ta muốn thiết kế những khối hộp có mặt đáy vuông để chuyển hàng qua hang động. Vì yêu cầu đặc biệt, các khối hộp không được xoay, khi đưa vào chỉ được hoặc đẩy sang phải, hoặc di chuyển lên hoặc xuống.

**Yêu cầu**: Cho biết các độ cao ~a_1,a_2,…,a_m~ và ~b_1,b_2,…,b_m~. Hãy xác định diện tích mặt bên lớn nhất của khối hộp có thể thiết kế.

## Dữ liệu vào:
- Dòng đầu chứa hai số nguyên ~n,m\ (n≤10^9,m≤5000)~
- Dòng thứ hai chứa ~m~ số nguyên không âm ~a_1,a_2,…,a_m~
- Dòng thứ ba chứa ~m~ số nguyên không âm ~b_1,b_2,…,b_m\  (a_i+b_i≤n)~

## Dữ liệu ra:
- Ghi ra một số nguyên duy nhất là kích thước tối đa khối hộp có thể sử dụng. Trường hợp không thể có đường qua hang, đưa ra ~0~.

## Ví dụ:
#### Dữ liệu vào:
```
5 6
0 0 0 2 2 2  
2 0 0 0 0 0
```

#### Dữ liệu ra:
```
16 20 11 17
1 1
```

#### Giải thích:
- Hình dạng của hang như sau:
```
...###.
...###.
.......
#......
#......
```