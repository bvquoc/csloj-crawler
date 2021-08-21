**<center>NGUỒN: Bài tập thầy Bình ôn Bắc Giang</center>**

Mê cung có $n$ phòng đánh số từ $1$ đến $n$, được nối với nhau bởi $m$ đoạn đường đi $2$ chiều nối trực tiếp $2$ phòng, đường đi thứ $i$ có màu $c_i$. Giữa $2$ phòng có thể có nhiều đường đi nối trực tiếp. Đường đi trực tiếp có thể nối một phòng với chính nó.
<center><img src="/images/problems/1434/IDEAL.png" width="320px" /></center>

Người chơi được máy bay lên thẳng thả xuống phòng $1$ và phải tìm đường đi tới phòng $n$. Độ dài của đường đi được tính bằng số đoạn đường nối giữa $2$ phòng đã đi qua. Ai có đường đi ngắn nhất sẽ thắng cuộc. Nếu có nhiều người cùng có đường đi ngắn nhất thì so sánh theo thứ tự từ điển các màu đã đi qua. Người có đường đi ngắn nhất với thứ tự từ điển nhỏ nhất sẽ thắng. Đường đi lý tưởng là đường ngắn nhất và có thứ tự từ điển nhỏ nhất.

**Yêu cầu:** Cho $m, n$ và các đường đi $(a_i, b_i, c_i)$ xác định đường màu $c_i$ nối từ phòng $a_i$ tới phòng $b_i\ (2 ≤ n ≤ 10^5,1 ≤ m ≤ 2×10^5,1 ≤ a_i, b_i ≤ n, 1 ≤ c_i ≤ 10^9)$. Dữ liệu đảm bảo có đường đi từ phòng $1$ đến phòng $n$. Hãy xác định đường đi lý tưởng: số đoạn đường và màu của các đoạn đó theo trình tự đi.

## Dữ liệu vào:
- Dòng đầu tiên chứa hai số nguyên $n$ và $m$;
- Dòng thứ $i$ trong $m$ dòng sau chứa $3$ số nguyên $a_i, b_i$ và $c_i$.

## Dữ liệu ra:
- Dòng đầu tiên chứa số nguyên $k$;
- Dòng thứ hai chứa $k$ số nguyên – màu của các đoạn theo trình tự đi.

## Ví dụ:
#### Dữ liệu vào:
```
4 6
1 2 1
1 3 2
3 4 3
2 3 1
2 4 4
3 1 1
```

#### Dữ liệu ra:
```
2
1 3
```