**<center>NGUỒN: ĐỀ THI LẬP ĐỘI TUYỂN HỌC SINH GIỎI CỦA TỈNH DỰ THI CHỌN HỌC SINH GIỎI QUỐC GIA THPT NĂM 2020 TỈNH QUẢNG NINH</center>**
<br>

Hôm qua John đọc được một bài viết về cúm gia cầm, trong đó nói rằng ADN của virus cúm có thể thay đổi tạo ra biến dạng mới. Theo bài viết đó, nếu ADN của virus hiện tại được biểu diễn như là một xâu T độ dài m chỉ bao gồm các ký tự in thường (từ $a$ đến $z$) thì một biến dạng mới rất nguy hiểm là virus có ADN dạng biểu diễn tương tự như xâu $T$ nhưng có đúng $2$ ký tự cách nhau đúng $k$ vị trí (tức là $T_i$ và $T_{i+k}$) bị thay bằng $2$ ký tự nào đó khác.

Biết được thông tin này John vội vàng cho lấy mẫu phân tích ADN của một con trong đàn gia cầm của mình, biến đổi về dạng biểu diễn qua các ký tự in thường (từ $a$ đến $z$) và kiểm tra xem con gia cầm có bị nhiễm vi rút biến dạng hay không?

Giả sử ADN của con gia cầm được biểu diễn bởi xâu $S$, ADN của virus được biểu diễn bởi xâu $T$. Con gia cầm được xem là nhiễm virus biến dạng nếu tồn tại xâu con $S_1$ của $S$ sao cho $S_1$ là biến dạng của $T$.

## Dữ liệu vào:
- Dòng đầu tiên chứa xâu $S$ độ dài $n$ biểu diễn mẫu ADN của con gia cầm John chọn.
- Dòng thứ hai chứa xâu $T$ độ dài $m$ biểu diễn ADN ban đầu của virus.
- Dòng cuối cùng chứa số nguyên $k$.
Mỗi xâu đều khác rỗng và có độ dài không quá $2.10^5$.

## Dữ liệu ra:
- Dòng đầu tiên chứa số nguyên $p$, là số lần xâu $T$ biến dạng xuất hiện trong $S$.
- Dòng thứ hai chứa $p$ số nguyên theo thứ tự tăng dần, mỗi số nguyên là điểm đầu trong $S$ xuất hiện một biến dạng của $T$.

## Ví dụ:
#### Dữ liệu vào:
```
abcaaaa
baab
3
```

#### Dữ liệu ra:
```
2
3 4
```

#### Dữ liệu vào:
```
abcaaabcd
aecb
2
```

#### Dữ liệu ra:
```
2
1 6
```

#### Giải thích:
- Test $\#1$: Có hai biến dạng của xâu $T$=**"baab"** trong xâu $S$ là **"caaa"** và **"aaaa"**.

## Giới hạn:
- Có $30\%$ số điểm tương ứng $30\%$ số test có $1≤k<m≤n≤200$;
- Có $30\%$ số test khác tương ứng $30\%$ số điểm có $200 < k < m ≤ n ≤ 10^4$;
- Có $40\%$ số test khác tương ứng với $40\%$ số điểm có $10^4 < k < m ≤ n ≤ 2.10^5$.