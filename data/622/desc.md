**<center>Nguồn: Beginner Free Contest 5</center>**

Cho ~3~ điểm ~A, B, C~ trong không gian ba chiều. Tính khoảng cách từ điểm ~A~ đến đường thẳng ~BC~.

## Dữ liệu vào:
Dòng đầu tiên chứa ~T~ ~(1 ≤ T ≤ 10^4)~ tương ứng với số bộ dữ liệu. Mỗi bộ dữ liệu gồm ~9~ số nguyên:
- ~3~ số nguyên đầu tiên ~x_A, y_A, z_A~ tương ứng với tọa độ điểm ~A~;
- ~3~ số nguyên tiếp theo ~x_B, y_B, z_B~ tương ứng với tọa độ điểm ~B~;
- ~3~ số nguyên cuối cùng ~x_C, y_C, z_C~ tương ứng với tọa độ điểm ~C~.

## Dữ liệu ra:
- In ra ~T~ dòng, mỗi dòng tương ứng với khoảng cách từ điểm ~A~ đến đường thẳng ~BC~, làm tròn chính xác đến ~2~ chữ số thập phân.

## Ví dụ:
#### Dữ liệu vào:
```
2
2 3 0 1 -1 0 10 100 0
3 0 -1 -5 5 2 1 1 3
```

## Dữ liệu ra:
```
0.64
4.28
```

## Giới hạn:
Dữ liệu đầu vào đảm bảo tọa độ không vượt quá ~|10^9|~, hai điểm ~B~ và ~C~ không trùng nhau.
- **Subtask** ~\#1~ ~(50\%):~ Dữ liệu đảm bảo ~z_A = 0, z_B = 0, z_C = 0~.
- **Subtask** ~\#2~ ~(50\%):~ Không có ràng buộc gì thêm.
**Nguồn:** [Chuyên Sơn La Online Judge](http://csloj.ddns.net/)

**Group giải đáp thắc mắc:** [Lập trình 24h](https://www.facebook.com/groups/1386904321519984)