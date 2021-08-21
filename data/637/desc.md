**<center>Nguồn: Beginner Free Contest 8</center>**

Cho một bảng ô vuông gồm ~n~ dòng và ~m~ cột. Các dòng được đánh số từ ~1~ đến ~n~, các cột được đánh số từ ~1~ đếm ~m~. Ô nằm ở dòng ~i~ và cột ~j~ được gọi là ô ~(i, j)~. Có ~k~ ô màu đen trên bảng, ô đen thứ ~i~ nằm ở vị trí ~(x_i, y_i)~. Các ô còn lại trong bảng đều có màu trắng.

Bạn có thể thực hiện một trong hai loại thao tác sau (mỗi thao tác có thể được thực hiện nhiều lần hoặc không lần nào).
- Chọn một dòng chỉ gồm các ô màu trắng, và xóa dòng đó khỏi bảng
- Chọn một cột chỉ gồm các ô màu trắng, và xóa cột đó khỏi bảng

Hãy tìm cách thực hiện các loại thao tác trên, sao cho số ô còn lại trong bảng là nhỏ nhất có thể.

## Dữ liệu vào:
- Dòng đầu tiên gồm ba số nguyên ~n, m, k\ (1 ≤ n, m, k ≤ 10^5)~ - số dòng, số cột của bảng và số ô đen.
- ~k~ dòng tiếp theo, dòng thứ ~i~ gồm hai số nguyên ~x_i, y_i\ (1 ≤ x_i ≤ n, 1 ≤ y_i ≤ m)~ - vị trí của ô đen thứ ~i~. Dữ liệu vào đảm bảo không có hai ô đen nào ở cùng vị trí.

## Dữ liệu ra:
- In ra số ô còn lại nhỏ nhất có thể sau khi thực hiện hai loại thao tác trên.

## Ví dụ:
#### Dữ liệu vào:
```
3 4 3
2 1
2 4
3 3
```

## Dữ liệu ra:
```
6
```

#### Dữ liệu vào:
```
4 4 4
2 1
3 4
4 1
4 4
```

## Dữ liệu ra:
```
6
```

#### Giải thích:
<img src="/images/problems/637/TABLEDEL.svg" width=800px>

## Giới hạn:
- ~50\%~ số test tương ứng với ~50\%~ số điểm có ~n, m, k ≤ 100~.
**Nguồn:** [Chuyên Sơn La Online Judge](http://csloj.ddns.net/)

**Group giải đáp thắc mắc:** [Lập trình 24h](https://www.facebook.com/groups/1386904321519984)