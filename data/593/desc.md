Cho mạng máy tính gồm $N$ máy và $M$ liên kết hai chiều giữa các máy. Các máy được đánh số từ $1$ đến $N$. Máy của Bờm là máy $1$ còn máy của Cuội là máy $N$. Mỗi đường nối cần tốn một giá trị thời gian khác nhau để dữ liệu truyền qua. Tốc độ kết nối giữa hai máy là độ dài đường truyền dữ liệu ngắn nhất giữa hai máy đó.

Tốc độ kết nối của mạng khá chậm khiến Bờm và Cuội không thể chơi Dota được, do đó Bờm quyết định mua $K$ thiết bị tăng tốc mạng. Thiết bị tăng tốc mạng được gắn vào các đường truyền dữ liệu giữa hai máy. Mỗi thiết bị sẽ làm giảm thời gian truyền dữ liệu của đường truyền đi một nửa.

Hãy giúp Bờm đặt các thiết bị tăng tốc sao cho tốc độ kết nối giữa máy của Bờm và Cuội là nhanh nhất có thể để hai bạn có thể chơi Dota mà không bị lag!

## Dữ liệu vào:
- Dòng đầu chứa ba số $N, M, K\ (1 ≤ N ≤ 1000; 1 ≤ M ≤ 10^5; 1 ≤ K ≤ 10)$;
- $M$ dòng tiếp theo, mỗi dòng chứa ba số $x, y, c$ mô tả một đường truyền dữ liệu: $x, y$ là số hiệu của hai máy tính, còn $c\ (1 ≤ c ≤ 10^6)$ là thời gian truyền dữ liệu.

## Dữ liệu ra:
- In ra một số duy nhất là tốc độ kết nối nhanh nhất có thể sau khi đã lắp đặt các thiết bị tăng tốc, làm tròn đến 2 chữ số thập phân.

## Ví dụ:
### Dữ liệu vào:
```
5 5 2
1 2 1
2 3 9
3 5 1
1 4 5
4 5 5
```

### Dữ liệu ra:
```
4.25
```

### Giải thích:
<center><img src="/images/problems/593/NETACCEL.png" width="400px" /></center>

- Ta gắn hai thiết bị tăng tốc vào kênh truyền giữa máy $2$ và máy $3$, thời gian truyền trên kênh này giảm xuống còn $9/2/2 = 2.25$. Lúc này đường truyền $1→2→3→5$ là đường truyền nhanh nhất với thời gian là $4.25$.