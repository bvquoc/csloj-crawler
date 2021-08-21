**<center>Nguồn: Ôn HN tháng 11/2016, Thầy Lê Minh Hoàng, Ngày 1</center>**

Ma trận vuông ~𝐼~ kích thước ~𝑘: 𝐼 = \{\delta_{𝑖𝑗}\}_{𝑘×𝑘}~ được gọi là ma trận đơn vị nếu:
~~{\delta _{ij}}\left\{ \begin{array}{l}
1,\,nếu\ i = j\\
0,\ nếu\ i \ne j
\end{array} \right.~~

Cho một ma trận ~𝐴~ kích thước ~𝑚×𝑛~ gồm các số nhị phân, các hàng được đánh số từ ~1~ tới ~𝑚~ theo thứ tự từ trên xuống dưới và các cột được đánh số từ ~1~ tới ~𝑛~ theo thứ tự từ trái qua phải: ~𝐴 = \{𝑎_{𝑖𝑗}\}_{𝑚×𝑛}~.

Hãy tìm cách xóa đi một số hàng và một số cột của ma trận ~𝐴~ để ma trận còn lại là ma trận đơn vị với kích thước lớn nhất có thể.

## Dữ liệu vào:
- Dòng đầu chứa hai số nguyên dương ~𝑚, 𝑛 ≤ 20~;
- ~𝑚~ dòng tiếp theo, dòng thứ ~𝑖~ ghi ~𝑛~ chữ số nhị phân, số thứ ~𝑗~ là ~𝑎_{𝑖𝑗},\ (𝑎_{𝑖𝑗} ∈ \{0,1\})~.

## Dữ liệu ra:
- Dòng đầu ghi kích thước ma trận đơn vị còn lại;
- Dòng thứ hai ghi chỉ số của những hàng phải xóa;
- Dòng thứ ba ghi chỉ số của những cột phải xóa.

## Ví dụ 
#### Dữ liệu vào:
```
5 6
1 0 0 0 0 1
0 1 1 0 0 1
0 0 0 1 0 1
0 1 0 0 1 1
1 0 0 0 1 1
```

#### Dữ liệu ra:
```
4
5
2 6
```

**Nguồn:** [Chuyên Sơn La Online Judge](http://csloj.ddns.net/)

**Group giải đáp thắc mắc:** [Lập trình 24h](https://www.facebook.com/groups/1386904321519984)