**<center>Nguồn: Ôn HN tháng 11/2016, Thầy Nguyễn Đức Nghĩa, Ngày 2</center>**

Cuội tham gia vào cuộc thi giải các trò chơi thách đố. Ở vòng thi cuối cùng, các thí sinh nhận được đề bài sau: Cho bảng vuông kích thước ~N×N~. Các dòng của bảng được đánh số từ ~1~ đến ~N~, từ trên xuống dưới. Các cột của bảng được đánh số từ ~1~ đến ~N~, từ trái qua phải. Bên dưới cột ~i~ người ta viết số nguyên dương ~X_i~, còn bên cạnh dòng ~j~ người ta viết số nguyên dương ~Y_j\ (i, j = 1, 2, …, N)~. Nhiệm vụ của người chơi là: tìm cách điền ~2\times N~ số nguyên dương vào các ô của bảng sao cho thỏa mãn các điều kiện sau đây:
- 1) Các số này phải khác nhau từng đôi;
- 2) Trong mỗi dòng và mỗi cột có đúng ~2~ số;
- 3) Tích của các số trên cột ~i~ phải đúng bằng ~X_i~;
- 4) Tích của các số trên dòng ~j~ phải đúng bằng ~Y_j~.

Hình vẽ dưới đây cho một ví dụ về bài toán này.
<center><img src="/images/problems/1238/NETNUM.png" width="300px" /></center>

**Yêu cầu:** Hãy giúp Cuội giải quyết bài toán đặt ra.

## Dữ liệu vào:
- Dòng đầu tiên chứa số nguyên ~N\ (2 ≤ N ≤ 10)~;
- Dòng thứ hai chứa ~N~ số nguyên dương ~X_1, X_2, \dots, X_N\ (X_i ≤ 1000, i = 1, 2, \dots, N)~;
- Dòng thứ ba chứa ~N~ số nguyên dương ~Y_1, Y_2, \dots, Y_N\ (Y_j ≤ 1000, j = 1, 2, …, N)~.

## Dữ liệu ra:
- Ghi ra ~N~ dòng, trong đó dòng thứ ~i~ chứa ~N~ số mô tả tình trạng của dòng thứ ~i~ của bảng sau khi điền số (qui ước ghi số ~0~ nếu như ô tương ứng không được điền số). Nếu như có nhiều lời giải thì chỉ cần đưa ra một lời giải bất kỳ. Dữ liệu đảm bảo luôn có ít nhất một lời giải.

## Ví dụ:
#### Dữ liệu vào:
```
2
2 12
3 8
```

#### Dữ liệu ra:
```
1 3
2 4
```

#### Dữ liệu vào:
```
3
5 8 18
2 30 12
```

#### Dữ liệu ra:
```
1 2 0
5 0 6
0 4 3
```

#### Dữ liệu vào:
```
5
54 6 12 20 88
18 9 132 32 10
```

#### Dữ liệu ra:
```
6 3 0 0 0
9 0 1 0 0
0 0 12 0 11
0 0 0 4 8
0 2 0 5 0
```
**Nguồn:** [Chuyên Sơn La Online Judge](http://csloj.ddns.net/)

**Group giải đáp thắc mắc:** [Lập trình 24h](https://www.facebook.com/groups/1386904321519984)