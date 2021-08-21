Cho mảng ~A~ gồm ~n~ số nguyên không âm: ~a_1, a_2, …, a_n~, hãy đếm số lần xuất hiện của các phần tử khác nhau trong mảng.

## Dữ liệu vào:
- Dòng đầu ghi số nguyên dương ~n~ là số phần tử của mảng;
- Dòng thứ hai ghi ~n~ số ~a_1, a_2, …, a_n~, mỗi số cách nhau bởi một dấu cách.

## Dữ liệu ra:
- Dòng đầu ghi số nguyên dương ~m~ là số phần tử khác nhau trong mảng ~A~;
- ~m~ dòng tiếp theo, mỗi dòng ghi ~2~ số ~u_i, f_i~ trong đó ~u_i~ là giá trị có trong mảng ~A, f_i~ là số lần xuất hiện của ~u_i~ (các số ~u_i~ được sắp xếp theo thứ tự xuất hiện lần đầu trong mảng ~A~).

## Ví dụ:
#### Dữ liệu vào:
```
6
5 3 2 3 2 2
```

#### Dữ liệu ra:
```
3
5 1
3 2
2 3
```

Giải thích: Có ~3~ giá trị khác nhau là ~5~, ~3~, ~2~ (theo đúng thứ tự xuất hiện). Số ~2~ xuất hiện ~3~ lần, số ~3~ xuất hiện ~2~ lần và số ~5~ xuất hiện ~1~ lần.

## Giới hạn:
- ~1 ≤ n ≤ 10^6,  |a_i|≤ 10^9~.