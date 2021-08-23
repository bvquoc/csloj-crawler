**<center>Nguồn: Ôn HN tháng 11/2017, Thầy Lê Minh Hoàng, Ngày 2</center>**

Cho dãy số nguyên $𝐴 = (𝑎_1, 𝑎_2, … , 𝑎_𝑛)$. Với số nguyên $𝑥$, định nghĩa khoảng cách từ $𝑥$ tới dãy $𝐴$ là:
$$\mathop {\min }\limits_{i = 1,2,...,n} \left| {x - {a_i}} \right|$$

**Yêu cầu:** Tìm số nguyên $𝑥 ∈ [𝐿, 𝑅]$ sao cho khoảng cách từ $𝑥$ tới dãy $𝐴$ là lớn nhất. Nếu có nhiều giá trị $𝑥$ có cùng 
khoảng cách tới $𝐴$ và đều là lớn nhất, cần chỉ ra giá trị $𝑥$ lớn nhất.

## Dữ liệu vào:
- Dòng đầu chứa ba số nguyên $𝑛, 𝐿, 𝑅\ (1 ≤ 𝑛 ≤ 10^5; −2^{63} ≤ 𝐿 ≤ 𝑅 < 2^{63})$;
- Dòng thứ hai chứa $𝑛$ số nguyên $𝑎_1, 𝑎_2, … , 𝑎_𝑛\ (∀𝑖: −2^{63} ≤ 𝑎_𝑖 < 2^{63})$.

## Dữ liệu ra:
- Ghi ra một số nguyên duy nhất là giá trị số $𝑥$ tìm được.

## Ví dụ:
### Dữ liệu vào:
```
4 3 8
2 4 6 8
```

### Dữ liệu ra:
```
7
```