**<center>Nguồn:  Free Contest 03</center>**

Bạn được cho một xâu kí tự. Bạn định cắt nó thành nhiều phần (mỗi phần chứa một đoạn liên tiếp trong xâu), sau đó ghép chúng lại. Khi ghép lại, bạn sẽ ghép chúng theo cách sao cho xâu thu được có thứ tự từ điển nhỏ nhất.

Tìm số phần nhiều nhất có thể cắt ra, sao cho xâu sau khi ghép lại giống với xâu ban đầu (vị trí của các kí tự không nhất thiết phải giống, chỉ cần nội dung xâu được giữ nguyên).

## Dữ liệu vào:
- Gồm một dòng duy nhất chứa xâu kí tự đầu vào. Xâu gồm không quá ~50~ kí tự và chỉ chứa các chữ cái in thường.

## Dữ liệu ra:
- In ra số phần nhiều nhất có thể cắt ra.

## Ví dụ:
#### Dữ liệu vào:
```
aba
```

#### Dữ liệu ra:
```
2
```

#### Dữ liệu vào:
```
babbaba
```

#### Dữ liệu ra:
```
2
```

#### Dữ liệu vào:
```
philosopherstone
```

#### Dữ liệu ra:
```
4
```

#### Dữ liệu vào:
```
knuthmorrispratt
```

#### Dữ liệu ra:
```
7
```

#### Dữ liệu vào:
```
acrushpetrtourist
```

#### Dữ liệu ra:
```
7
```

#### Dữ liệu vào:
```
zzzzz
```

#### Dữ liệu ra:
```
5
```

#### Giái thích:
- Ví dụ ~1:~ Cắt thành ~2~ phần `a` và `ba`. Nếu cắt thành ~3~ phần sẽ dẫn đến việc ghép lại thành xâu `aab`;
- Ví dụ ~2:~ Cắt thành ~2~ phần `ba` và `bbaba`;
- Ví dụ ~6:~ Có thể cắt thành các phần giống nhau.
**Nguồn:** [Chuyên Sơn La Online Judge](http://csloj.ddns.net/)

**Group giải đáp thắc mắc:** [Lập trình 24h](https://www.facebook.com/groups/1386904321519984)