Tại vương quốc HT có một trạm kiểm soát oto (các oto đều có biển số có $4$ chữ số), chỉ các oto có biển số là số nguyên tố mới được đi vào thành phố. Tuy nhiên hệ thống nhận dạng của các kỹ sư tin học của vương quốc HT bị sai, các biển số xe oto thì đều nhận dạng ngược.

**Ví dụ:** Biển số xe là $0003$ thì bị nhận dạng là $3000$.

Bạn hãy giúp HT xác định chính xác có bao nhiêu oto có thể vào thành phố?

## Dữ liệu vào:
- Dòng đầu chứa số nguyên dương $N$ tương ứng số lượng oto qua trạm kiểm soát. ($N≤50000)$;
- Dòng tiếp theo chứa $N$ số nguyên dương có $4$ chữ số thập phân, tương ứng là biển số xe bị đảo ngược $(0001 ≤\text{ biển số }≤ 9999)$.

## Dữ liệu ra:
- Ghi ra một số duy nhất là số lượng xe có biển số là nguyên tố?

## Ví dụ:
#### Dữ liệu vào:
```
4
3000 0013 8009 7100
```

#### Dữ liệu ra:
```
2
```

#### Dữ liệu vào:
```
5
0870 4412 0981 4989 4142
```

#### Dữ liệu ra:
```
0
```