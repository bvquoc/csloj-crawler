**<center>NGUỒN: ĐỀ THI LẬP ĐỘI TUYỂN HỌC SINH GIỎI CỦA TỈNH DỰ THI CHỌN HỌC SINH GIỎI QUỐC GIA THPT NĂM 2020 TỈNH QUẢNG NINH</center>**
<br>

Cho một đồ thị vô hướng có trọng số gồm ~n~ đỉnh và ~m~ cạnh. Các đỉnh được đánh số từ ~1~ đến ~n~. 
Bạn hãy tìm đường đi ngắn thứ ~k~ trong đồ thị này (đường đi từ một đỉnh đến chính nó không được tính, đường đi từ đỉnh ~i~ đến ~j~ và từ ~j~ đến ~i~ được xem là một).
Cụ thể nếu ~d~ là ma trận đường đi ngắn nhất, ở đó ~d_{ij}~ là độ dài đường đi ngắn nhất giữa hai đỉnh ~i~ và ~j\ (1 ≤ i < j ≤ n)~, thì bạn cần đưa ra phần tử thứ ~k~ của mảng đã được sắp xếp gồm tất cả các ~d_{ij}\ (1 ≤ i < j ≤ n)~.

## Dữ liệu vào:
- Dòng đầu tiên chứa ~3~ số nguyên ~n, m~ và ~k\ (2 ≤ n, m ≤ 10^5, 1 ≤ k ≤ 10^3)~ lần lượt là số đỉnh, số cạnh của đồ thị và giá trị ~k~. 
- Tiếp theo có ~m~ dòng, mỗi dòng chứa ~3~ số nguyên ~x, y~ và ~w\ (1 ≤ x, y ≤ n, 1 ≤ w ≤ 10^9, x ≠ y)~ mô tả một cạnh nối hai đỉnh ~x, y~ với trọng số ~w~ (giữa hai đỉnh bất kỳ có tối đa một cạnh nối chúng).

## Dữ liệu ra:
- Một số nguyên là độ dài đường đi ngắn thứ ~k~ của đồ thị. Dữ liệu vào đảm bảo luôn tồn tại đường đi ngắn thứ ~k~.

## Ví dụ:
#### Dữ liệu vào:
```
6 10 5
2 5 1
5 3 9
6 2 2
1 3 1
5 1 8
6 5 10
1 6 5
6 4 6
3 6 2
3 4 5
```

#### Dữ liệu ra:
```
3
```

#### Dữ liệu vào:
```
7 15 18
2 6 3
5 7 4
6 5 4
3 6 9
6 7 7
1 6 4
7 1 6
7 2 1
4 3 2
3 2 8
5 3 6
2 5 5
3 7 9
4 1 8
2 1 1
```

#### Dữ liệu ra:
```
9
```

## Giới hạn:
- Có ~25\%~ test: ~1 ≤ k ≤ 3~;
- Có ~25\%~ test: ~n ≤ 10^2~;
- Có ~25\%~ test: ~k ≤ 10^2~;
- Có ~25\%~ còn lại: Như ràng buộc trong đề bài.
**Nguồn:** [Chuyên Sơn La Online Judge](http://csloj.ddns.net/)

**Group giải đáp thắc mắc:** [Lập trình 24h](https://www.facebook.com/groups/1386904321519984)