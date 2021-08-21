Một số nguyên dương  ~x = \overline {{a_k}{a_{k-1}}...{a_1}}~ được gọi là số Amstrong nếu: ~x = a_k^k + a_{k-1}^k + ... + a_1^k~.

Cho số nguyên dương ~n~, tìm số Amstrong lớn nhất không vượt quá ~n~.

## Dữ liệu vào:
- Dòng đầu ghi số nguyên dương ~T~ là số bộ test;
- ~T~ dòng tiếp theo, mỗi dòng chứa một số nguyên dương ~n~.

## Dữ liệu ra:
Với mỗi số ~n~, ghi ra trên một dòng số Amstrong lớn nhất không vượt quá ~n~.

## Ví dụ:
#### Dữ liệu vào:
```
2
4
154
```

#### Dữ liệu ra:
```
4
153
```

#### Giải thích:
- Test case ~\#1~: Số ~4~ là số Amstrong vì ~4=4^1~
- Test case ~\#2~: Số ~153~ là số Amstrong vì ~1^3 + 5^3 + 3^3 = 153~ nhưng ~154~ không là số Amstrong.

## Giới hạn:
- ~1 ≤ T ≤ 10^5, 1 ≤ n ≤ 10^6~.