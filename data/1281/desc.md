Bài học tiếp theo về “cấu trúc dữ liệu và giải thuật” là bài toán Longest increasing Subsequence (LIS), tức là bài toán dãy con tăng dài nhất (các phần tử tăng dần). Để hiểu rõ hơn về nó, Tuấn Anh quyết định đọc bài trước ở nhà.

Tuấn Anh tạo ra một dãy số gồm ~N~ số nguyên dương ~(1≤N≤10^5)~ và các số trong dãy nằm trong đoạn ~[1, 10^5]~. Anh nhận ra rằng, dãy số của mình có một số dãy con tăng dài nhất, vì thế quyết định chia các vị trí ra thành các nhóm:

1. Không thuộc bất kì dãy con tăng dài nhất nào.
2. Thuộc ít nhất một dãy con tăng dài nhất nhưng không phải thuộc tất cả các dãy con tăng dài nhất.
3. Thuộc toàn bộ các dãy con tăng dài nhất.

## Dữ liệu vào:
- Dòng đầu tiên là số nguyên dương ~N~ là độ dài của dãy số của Tuấn Anh;
- Dòng thứ hai gồm ~N~ số thể hiện dãy số.

## Dữ liệu ra:
- Gồm ~N~ số nguyên liền nhau, số thứ ~i~ có giá trị là ~1, 2~ hoặc ~3~, có nghĩa là phần tử ở vị trí ~i~ thuộc vào nhóm tương ứng.

## Ví dụ:
#### Dữ liệu vào:
```
4
1 3 2 5
```

#### Dữ liệu ra:
```
3223
```

## Giới hạn:
- ~50\%~ có ~N≤20~.
**Nguồn:** [Chuyên Sơn La Online Judge](http://csloj.ddns.net/)

**Group giải đáp thắc mắc:** [Lập trình 24h](https://www.facebook.com/groups/1386904321519984)