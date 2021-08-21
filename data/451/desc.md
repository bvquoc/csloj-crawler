**<center>(Đề đề xuất DHBB $2017$ của THPT CHUYÊN BIÊN HÒA, T. HÀ NAM)</center>**

Có $n$ căn nhà cần sơn. Căn nhà $i$ được sơn bằng một trong $3$ màu Xanh, Hồng, Vàng với mức giá tương ứng là $a_{i_1}, a_{i_2}, a_{i_3}$.

**Yêu cầu:** Tìm cách sơn màu cho $n$ ngôi nhà sao cho hai căn nhà cạnh nhau không được sơn cùng màu và tổng chi phí sơn là ít nhất.

## Dữ liệu vào:
- Dòng đầu chứa số nguyên dương $N$ là số ngôi nhà;
- $N$ dòng tiếp theo, dòng thứ $i$ chứa ba số nguyên dương $a_{i_1}, a_{i_2}, a_{i_3}$ được ghi cách nhau bởi một dấu cách.

## Dữ liệu ra:
- Một số nguyên duy nhất là chi phí ít nhất để sơn $N$ ngôi nhà.

## Ví dụ:
#### Dữ liệu vào:
```
4
13 23 12
77 36 64
44 89 76
31 78 45
```

#### Dữ liệu ra:
```
137
```

#### Giải thích:
- Các ngôi nhà lần lượt được sơn các màu: Vàng, Hồng, Xanh, Vàng. Tổng chi phí là: $12 + 36 + 44 + 45 = 137$

## Giới hạn:
- $1 ≤ N ≤ 10^5, 1 ≤ a_{i_1}, a_{i_2}, a_{i_3} ≤ 10^4$.