**<center>Hải phòng - Ngày 06 tháng 11 năm 2020 (am)</center>**

Phòng lũy bảo vệ thành Cổ Loa có thể xem như là một hàng dài ~n~ cột đá với độ cao là các số nguyên không âm. Mỗi cột đá được tạo bởi các khối đá hình lập phương đơn vị xếp chồng lên nhau (do vậy độ cao của mỗi cột chính bằng số khối lập phương chồng lên nhau của cột này).

Tương truyền rằng Phòng lũy bảo vệ này được xây dựng qua nhiều năm theo qui trình sau: Đầu tiên ~n~ cột đá chưa có khối lập phương nào và lúc này độ cao của mỗi cột coi như bằng ~0~. Mỗi lần, vua An Dương Vương sẽ chọn một dãy  liên tục các cột đá có độ cao bằng nhau và xếp lên tất cả các cột đá đã chọn mỗi cột một khối lập phương, ngoại trừ cột bên trái và bên phải của dãy cột đã chọn (như vậy độ cao của các cột giữa đoạn liên tục này tăng thêm một): 
<center><img src="/images/problems/1288/RAMPART.png" width="800px" /></center>

Năm tháng trôi qua, một vài cột đá trong phòng lũy bảo vệ đã bị mất. Khi Cổ Loa được công nhận là di tích quốc gia, dựa vào độ cao của các cột đá không bị mất, một bài toán đặt ra với các nhà khảo cổ là: có bao nhiêu phòng lũy khác nhau ứng với hiện trạng hiện nay?.

## Dữ liệu vào:
- Dòng đầu tiên chứa số nguyên dương ~n ≤ 10000~ là số cột của phòng lũy;
- Dòng thứ hai chứa ~n~ số nguyên ~h_i\ (−1≤ h_i ≤10000)~ là độ cao của các cột đá. Độ cao ~-1~ tương ứng với các cột đã bị mất.

## Dữ liệu ra:
- Một dòng duy nhất là số phòng lũy khác nhau. Vì số này có thể rất lớn nên chỉ cần tính phần dư của nó khi chia cho ~10^9+7~.

## Ví dụ:
#### Dữ liệu vào:
```
3
-1 2 -1
```

#### Dữ liệu ra:
```
0
```

#### Dữ liệu vào:
```
3
-1 -1 -1
```

#### Dữ liệu ra:
```
2
```

#### Dữ liệu vào:
```
6
-1 -1 -1 2 -1 -1
```

#### Dữ liệu ra:
```
3
```
**Nguồn:** [Chuyên Sơn La Online Judge](http://csloj.ddns.net/)

**Group giải đáp thắc mắc:** [Lập trình 24h](https://www.facebook.com/groups/1386904321519984)