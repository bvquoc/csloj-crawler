Cho hai xâu ký tự $s$ và $t$ có độ dài lần lượt là $n$ và $m\ (m ≤ n)$. Xâu $t$ được gọi là xuất hiện (khớp) tại vị trí $i$ của xâu $s$ nếu $t = s[i..(i + m – 1)]$ (hay $s[i] = t[1], ..., s[i + m – 1] = t[m]$).

Bạn được cho hai xâu ký tự $s$ và $t$ chỉ gồm các chữ cái Latinh thường (‘a’, …, ’z’). hãy liệt kê tất cả các vị trí trên xâu $s$ mà xâu $t$ xuất hiện.

## Dữ liệu vào:
- Dòng đầu chứa xâu $s$;
- Dòng thứ hai chứa xâu $t$.

## Dữ liệu ra:
- Ghi trên một dòng các vị trí xuất hiện của xâu $t$ trong xâu $s$ (chỉ số của ký tự đầu tiên trong xâu là $1$, các vị trí được liệt kê theo thứ tự tăng dần, hai số liên tiếp được ghi cách nhau một dấu cách).

## Ví dụ:
### Dữ liệu vào:
```
abababa
ba
```

### Dữ liệu ra:
```
2 4 6
```

## Giới hạn:
- $1 ≤ |s|, |t| ≤ 10^6; |t| ≤ |s|$.