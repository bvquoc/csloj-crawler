**<center>ĐỀ KIỂM TRA ĐỘI TUYỂN HSG LẦN 3 - Ôn Hải Phòng T11/2020</center>**

Gug đang chuẩn bị một bữa tiệc cho bạn bè của mình. Bữa tiệc bao gồm ~N~ đĩa thức ăn được sắp xếp thành một hàng duy nhất, với đĩa thứ ~i~ từ bên trái mang lại cho ~A_i~ điểm hài lòng nếu ăn. Vì một số đĩa thức ăn có thể bị thối, có thể ~A_i~ âm tính.

Có tổng cộng ~K~ người tham gia vào bữa tiệc, và mỗi người sẽ được chỉ định một phân khúc đĩa liên tiếp để tiêu thụ. Phân khúc này có thể có thể trống. Phân khúc của hai người không thể trùng nhau, vì thức ăn không thể ăn hai lần. Gug muốn gán các đĩa cho bạn bè của mình sao cho tổng điểm hài lòng của tất cả các đĩa thức ăn được tiêu thụ là tối đa.

## Dữ liệu vào:
- Dòng đầu có hai số nguyên ~N~ và ~K\ (1 ≤ K ≤ N ≤ 3 \times 10^5)~;
- Dòng tiếp theo sẽ chứa ~N~ số nguyên ~A_1 ,\dots , A_N\ (1 ≤ |A_i| ≤ 10^9)~.

## Dữ liệu ra:
- Ghi ra một số nguyên duy nhất trên một dòng, tổng điểm hài lòng trong một bài tập tối ưu.

## Ví dụ:
#### Dữ liệu vào:
```
6 1
1 -2 3 -1 5 -6
```
#### Dữ liệu ra:
```
7
```

#### Dữ liệu vào:
```
6 2
1 2 3 -10 5 6
```

#### Dữ liệu ra:
```
17
```

#### Dữ liệu vào:
```
6 4
-1 -2 -1 0 -5 -1
```

#### Dữ liệu ra:
```
0
```

## Giới hạn:
- Subtask ~\#1: 4\%~ số điểm có ~A_i ≥ 0~;
- Subtask ~\#2: 8\%~ số điểm khác thỏa trong dãy có nhiều nhất một giá trị ~A_i < 0~;
- Subtask ~\#3: 18\%~ số điểm khác có ~K = 1~;
- Subtask ~\#4: 10\%~ số điểm khác có ~1 ≤ K ≤ N ≤ 80~;
- Subtask ~\#5: 11\%~ số điểm khác có ~1 ≤ K ≤ N ≤ 300~;
- Subtask ~\#6: 20\%~ số điểm khác có ~1 ≤ K ≤ N ≤ 2000~;
- Subtask ~\#7: 29\%~ số điểm cuối cùng không có ràng buộc gì thêm.