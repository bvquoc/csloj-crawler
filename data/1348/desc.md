**<center>Nguồn: Bài tập thầy Nguyễn Thanh Bình ôn Hải phòng - Ngày 10 tháng 11 năm 2020 (am)</center>**

Dọc đường cao tốc Hà Nội - Ninh Bình có ~𝑛~ trạm bơm xăng. Để đơn giản ta có thể coi đường cao tốc như là trục tọa độ một chiều và mỗi trạm bơm xăng được mô tả như là một điểm trên trục tọa độ này. Cụ thể trạm thứ ~𝑖~ đặt tại vị trí ~𝑥_𝑖~ và có dung tích bể chứa là ~𝑐_𝑖~.

Sau một thời gian hoạt động, Ban quản lý đường cao tốc nhận thấy cần phải giảm bơt số lượng các trạm bơm xăng trên đường cao tốc để đảm bảo hiệu quả hoạt động cũng như giảm thiểu nguy cơ cháy nố nếu duy trì quá nhiều trạm bơm xăng. Các trạm bơm xăng trong diện cần loại bỏ là các trạm không hiệu quả. Một trạm được gọi là không hiệu quả nếu như trong khoảng cách ~D~ km về bên trái nó tồn tại một trạm khác có bể chứa lớn hơn hoặc bằng hai lần bề chứa của trạm này và trong khoảng cách 
~D~ km về bên phải cũng có một trạm khác có bể chứa lớn hơn hoặc bằng hai lần bể chứa của trạm đang xét.

Viết chương trình xác định có bao nhiêu trạm bơm xăng không hiệu quả.

## Dữ liệu vào:
- Dòng đầu tiên ghi hai số nguyên dương ~𝑛, 𝐷\ (1 ≤ 𝑛 ≤ 50000, 1 ≤ 𝐷 ≤ 10^9)~;
- ~𝑛~ dòng tiếp theo, dòng thứ ~𝑖~ ghi hai số nguyên ~𝑥_𝑖, ℎ_𝑖\ (1 ≤ 𝑥_𝑖, ℎ_𝑖 ≤ 10^9)~. Dữ liệu đảm bảo rằng vị trí của các trạm xăng là khác nhau.

Hai số liên tiếp trên cùng một dòng cách nhau bằng khoảng trống

## Dữ liệu ra:
- Ghi ra một số nguyên duy nhất là số lượng trạm bơm xăng không hiệu quả.

### Ví dụ:
#### Dữ liệu vào:
```
6 4
10 3
6 2
5 3
9 7
3 6
11 2
```

#### Dữ liệu vào:
```
2
```

#### Giải thích:
- Trong ví dụ trên các trạm đặt ở vị trí ~𝑥 = 5~ và ~𝑥 = 6~ là các trạm không hiệu quả.

## Giới hạn:
- Subtask ~\#1: 50\%~ số điểm của bài có ~𝑛 ≤ 5000~;
- Subtask ~\#2: 50\%~ số điểm còn lại của bài có ~𝑛 ≤ 50000~.
**Nguồn:** [Chuyên Sơn La Online Judge](http://csloj.ddns.net/)

**Group giải đáp thắc mắc:** [Lập trình 24h](https://www.facebook.com/groups/1386904321519984)