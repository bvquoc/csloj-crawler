**<center>(Đề đề xuất DHBB 2017 của THPT CHUYÊN HẠ LONG – QUẢNG NINH)</center>**

An có hai xâu $s, t$ gồm các kí tự Latin in thường và một số nguyên $k$. An muốn chọn ra $k$ xâu con rời nhau khác rỗng gồm các kí tự liên tiếp trong xâu $s$ sao cho các xâu này cũng xuất hiện rời nhau trong xâu $t$ với cùng một thứ tự như trong xâu $s$ và tổng độ dài của $k$ xâu này là lớn nhất có thể. Cụ thể hơn, An muốn tìm $k$ xâu khác rỗng $p_1, p_2, …, p_k$ sao cho:
- Xâu $s$ có thể được biểu diễn bởi chuỗi $a_1p_1a_2p_2…a_kp_ka_{k+1}$ ở đó $a_1, a_2, …, a_{k+1}$ là những xâu bất kì (có thể là xâu rỗng).
- Xâu $t$ có thể được biểu diễn bởi chuỗi $b_1p_1b_2p_2…b_kp_kb_{k+1}$ ở đó $b_1, b_2, …, b_{k+1}$ là những xâu bất kì (có thể là xâu rỗng).
- $|p_1| + |p_2| + ⋯ + |p_k|$ đạt giá trị lớn nhất, ở đó $|p_i|$ là độ dài của xâu $p_i$.

Bạn hãy giúp An tính toán tổng độ dài lớn nhất của $k$ xâu thỏa mãn yêu cầu bài toán.

## Dữ liệu vào:
- Dòng đầu tiên chứa số nguyên dương $k$;
- Dòng thứ hai chứa xâu $s$;
- Dòng thứ ba chứa xâu $t$.

## Dữ liệu ra:
- Một số nguyên duy nhất là giá trị lớn nhất của $|p_1| + |p_2| + ⋯ + |p_k$|, nếu không tồn tại cách tách xâu thỏa mãn thì đưa ra $-1$.

## Ví dụ:
#### Dữ liệu vào:
```
2
abc
ab
```

#### Dữ liệu ra:
```
2
```

#### Dữ liệu vào:
```
4
bbaaababb
abbbabbaaaba
```

#### Dữ liệu ra:
```
7
```

#### Dữ liệu vào:
```
3
abc
def
```

#### Dữ liệu ra:
```
-1
```

#### Giải thích:
- Trong test $2$: $4$ xâu tách được là `bb`, `a`, `aa`, `ba`.
- $s =$ `bb|a|aa|ba|b|b`
- $t =$ `a|bb|babb|a|aa|ba`

## Giới hạn:
- $1 ≤ k ≤ 10$; Các xâu $s, t$ khác rỗng và độ dài không quá $1000$.