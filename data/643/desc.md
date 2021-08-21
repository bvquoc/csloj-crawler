**<center>Nguồn: Beginner Free Contest 9</center>**

Cho một xâu $s$ dộ dài $n$ chỉ gồm các kí tự latin in thường. Một số kí tự trong xâu $s$ bị mờ và không thể đọc được (các kí tự bị mờ này sẽ được biểu diễn bằng kí tự `?`). Hãy tìm cách khôi phục các kí tự bị mờ trong xâu $s$ sao cho:
- Với mỗi kí tự $c$ từ `a` đến `z`, tần số của kí tự $c$ trong xâu $s$ đúng bằng $f_c$.
- Xâu $s$ có thứ tự từ điển nhỏ nhất.

**Lưu ý:** Xâu $x$ được gọi là có thứ tự từ điển nhỏ xâu $y$ nếu xâu $x$ là tiền tố của xâu $y$ hoặc $x_k < y_k$ (với $k$ là vị trí $i$ nhỏ nhất mà $x_i \le y_i$).

## Dữ liệu vào:
- Dòng đầu tiên gồm số nguyên $n$ - độ dài xâu $s\ (1 ≤ n ≤ 1000)$;
- Dòng thứ hai gồm một xâu độ dài $n$, chỉ gồm các kí tự latin in thường và kí tự  `?` - mô tả xâu $s$;
- Dòng thứ ba gồm $26$ số nguyên $f_a, f_b, . . ., f_z$ - tần số của các kí tự từ `a` đến `z` trong xâu $s$. Dữ liệu vào đảm bảo tổng $26$ số nguyên này đúng bằng $n$.

## Dữ liệu ra:
- In ra xâu $s$ sau khi được khôi phục các kí tự bị mờ. Trong trường hợp không có cách khôi phục xâu $s$ thỏa điều kiện đề bài, hãy in ra $-1$.

## Ví dụ:
#### Dữ liệu vào:
```
6
y???z?
2 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 1
```

#### Dữ liệu ra:
```
yaabzc
```

#### Dữ liệu vào:
```
6
yy??z?
2 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 1
```

#### Dữ liệu ra:
```
-1
```

#### Dữ liệu vào:
```
11
fr??co?te?t
0 0 1 0 3 1 0 0 0 0 0 0 0 1 1 0 0 1 1 2 0 0 0 0 0 0
```

#### Dữ liệu ra:
```
freecontest
```