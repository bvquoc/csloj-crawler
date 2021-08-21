**<center>Nguồn:  Free Contest 04</center>**
**[Nguồn bài](http://tjsct.wikidot.com/usaco-mar08-silver)**

Đàn bò đang di chuyển trên một bãi cỏ kích thước ~M × N~. Bãi cỏ có một số ô vuông là cây và không thể di chuyển qua nó. Tại mỗi phút, đàn bò có thể di chuyển đến một trong bốn ô kề cạnh, thỏa mãn chúng không bao giờ đi vào ô có cây hoặc đi ra ngoài đồng cỏ.

Nông dân John đã ghi lại được: đàn bò di chuyển từ ô ~(R_1, C_1)~ đến ô ~(R_2, C_2)~ trong đúng ~T~ phút (lũ bò có thể đến ô ~(R_2, C_2)~ trước đó hay không, John không thể xác định được, nhưng anh biết chắc chắn sau ~T~ phút lũ bò đang đứng tại ô ~(R_2, C_2)~). Xác định số cách di chuyển thỏa mãn ghi chép của John (hai cách di chuyển được gọi là khác nhau, nếu tồn tại một phút nào đó đàn bò di chuyển theo hai hướng khác nhau.

## Dữ liệu vào:
- Dòng đầu tiên chứa ba số nguyên ~M, N, T\ (2 ≤ M, N ≤ 100, 1 ≤ T ≤ 15)~;
- Trong ~M~ dòng tiếp theo, dòng thứ ~k~ chứa xâu kí tự ~N~ chữ cái. Chữ cái `.` mô tả một ô trống, `*` mô tả một ô có cây;
- Dòng tiếp theo chứa bốn số nguyên ~R_1, C_1, R_2, C_2~. Dữ liệu đảm bảo các ô ~(R_1, C_1)~ và ~(R_2, C_2~) là ô trống.

## Dữ liệu ra:
- Ghi ra một số nguyên duy nhất là số cách đàn bò di chuyển từ ~(R_1, C_1)~ ô đến ô ~(R_2, C_2)~.

## Ví dụ:
#### Dữ liệu vào:
```
4 5 6
...*.
...*.
.....
.....
1 3 1 5
```

#### Dữ liệu ra:
```
1
```